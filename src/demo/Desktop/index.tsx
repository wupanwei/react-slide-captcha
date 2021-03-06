/// <reference path='../../../types/global.d.ts'/>

import * as React from 'react';
import SlideCaptcha from '../../components/Jigsaw/index';
import { getPuzzle, validate }  from '../../../mock/mock';
import * as qrcode from '../../assets/img/qrcode.png';
import { inlineCodeHtml, outlineCodeHtml, staticInlineCodeHtml, hoverInlineCodeHtml } from '../../../mock/prismjs';
import '../../normalize.less';
import './index.less';


enum positionStringMap {
  top =  'top',
  bottom = 'bottom',
}

interface IState {
  puzzleUrl: string;
  bgUrl: string;
  id: string;
  isLoading: boolean;
}

class Demo extends React.Component<null, IState> {
  constructor(props) {
    super(props);
    this.state = {
      puzzleUrl: '',
      bgUrl: '',
      id: '',
      isLoading: false,
    };
  }

  private vnode = null;

  componentDidMount() {
    this.getPuzzleInfo().then((res) => {
      this.setState({
        id: res.id,
        puzzleUrl: res.puzzleUrl,
        bgUrl: res.bgUrl,
      });
    });
  }

  getPuzzleInfo = async () => {
    return await getPuzzle().then((res) => {
      const data = JSON.parse(res);
      return data;
    });
  };

  handleGetPuzzleInfo =  () => {
    this.setState({
      isLoading: true,
    });
    this.getPuzzleInfo().then((res) => {
      this.setState({
        id: res.id,
        puzzleUrl: res.puzzleUrl,
        bgUrl: res.bgUrl,
        isLoading: false,
      });
    });
  }

  resultCallback = (
    validateValue: number,
    validatedSuccess?: (callback: () => any) => void,
    validatedFail?: (callback: () => any) => void,
    resetCaptcha?: () => void,
  ) => {
    validate({id: this.state.id, distance: validateValue}).then(res => {
        const data = JSON.parse(res);
        const { code } = data;
        if (code === 100) {
          validatedSuccess(() => {
            alert('验证成功，此处可以验证成功代码');
          });

        } else {
          validatedFail(() => {
            alert('验证失败，处可以处理验证失败代码');
          });
        }
    }).catch(() => {
        console.log('报错啦');
        resetCaptcha();
    });
  };

  componentReload = () => this.vnode.resetCaptcha();

  render() {
    return(
      <div id="desktop" >
        <p className="live-demo-title">react-slide-captcha live demo</p>
        <p className="live-demo-sub-title">reload - inline</p>
        <SlideCaptcha
          ref={ref => this.vnode = ref}
          displayType="static"
          puzzleUrl={this.state.puzzleUrl}
          bgUrl={this.state.bgUrl}
          onRequest={this.resultCallback}
          onReset={this.handleGetPuzzleInfo}
          containerClassName="test"
          tipsStyle={{ fontSize: '14px'}}
          tipsText="按住滑块，拖住完成下方拼图"
          reset="manual"
          isLoading={this.state.isLoading}
          resetButton="inline"
          imagePosition={positionStringMap.top}
          robotValidate={{
            offsetY: 5,
            handler: ():void => {
              alert('错误，您并非人类');
            },
          }}
        />
        <div className="demoLayer">
          <pre>
            <code className="language-jsx" dangerouslySetInnerHTML={{ __html: inlineCodeHtml }} />
          </pre>
        </div>
        <p className="live-demo-sub-title">reload - outline</p>
        <SlideCaptcha
          ref={ref => this.vnode = ref}
          displayType="static"
          puzzleUrl={this.state.puzzleUrl}
          bgUrl={this.state.bgUrl}
          onRequest={this.resultCallback}
          onReset={this.handleGetPuzzleInfo}
          containerClassName="test"
          reset="manual"
          isLoading={this.state.isLoading}
          resetButton="outline"
          imagePosition="top"
        />
        <div className="demoLayer">
          <pre>
            <code className="language-jsx" dangerouslySetInnerHTML={{ __html: outlineCodeHtml }} />
          </pre>
        </div>
        <p className="live-demo-sub-title">displayType - static</p>
        <SlideCaptcha
          ref={ref => this.vnode = ref}
          displayType="static"
          puzzleUrl={this.state.puzzleUrl}
          bgUrl={this.state.bgUrl}
          onRequest={this.resultCallback}
          onReset={this.handleGetPuzzleInfo}
          containerClassName="test"
          reset="manual"
          isLoading={this.state.isLoading}
          resetButton="inline"
          imagePosition="top"
        />
        <div className="demoLayer">
          <pre>
            <code className="language-jsx" dangerouslySetInnerHTML={{ __html: staticInlineCodeHtml }} />
          </pre>
        </div>
        <p className="live-demo-sub-title">displayType - hover</p>
        <SlideCaptcha
          ref={ref => this.vnode = ref}
          displayType="hover"
          puzzleUrl={this.state.puzzleUrl}
          bgUrl={this.state.bgUrl}
          onRequest={this.resultCallback}
          onReset={this.handleGetPuzzleInfo}
          containerClassName="test"
          reset="manual"
          hoverPanelClassName="hoverPanelDefault"
          isLoading={this.state.isLoading}
          resetButton="outline"
          imagePosition={positionStringMap.top}
        />
        <div className="demoLayer">
          <pre>
            <code className="language-jsx" dangerouslySetInnerHTML={{ __html: hoverInlineCodeHtml }} />
          </pre>
          <p className="live-demo-opt" style={{marginTop: '32px'}}>Function - List</p>
          <div style={{marginTop: '20px auto', textAlign: 'center'}}>
            <div style={{margin: '32px auto', width: '240px'}} className="clearfix">
              <button className="live-demo-button" onClick={this.handleGetPuzzleInfo}>外部方法刷新</button>
              <button className="live-demo-button" onClick={this.componentReload}>组实方法新</button>
            </div>
          </div>
        </div>
        <div className="demoLayer">
          <p className="live-demo-opt">Mobile Live Demo</p>
          <img src={qrcode} style={{margin:'42px auto'}} />
        </div>
      </div>
    );
  }
}

export default Demo;

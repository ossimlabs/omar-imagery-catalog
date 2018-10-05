import React, { Component } from "react";

import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from "./config";
import "whatwg-fetch";

import { Button } from 'mdbreact';
import OlMap from "./OlMap";

class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     serverInfo: {},
  //     clientInfo: {
  //       version: CLIENT_VERSION,
  //       react: REACT_VERSION
  //     }
  //   };
  // }
  handleDeepScan = () => {
    console.log('Handling Deep Scan!');
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
              <h1>OMAR Imagery Catalog</h1>
              </div>
              <Button color="primary" onClick={this.handleDeepScan}>Deep</Button>
              <Button color="primary">Incremental</Button>
            </div>
            <div className="row">
              <div className="col">
                <OlMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

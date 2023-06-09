import React from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "shards-react";

export default class PopoverExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this)
    this.state = {
      open: false
    };
  }

  toggle() {
      this.setState({
        
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <Button id="popover-1" onClick={this.toggle}>
          Toggle
        </Button>
        <Popover
          placement="bottom"
          open={this.state.open}
          toggle={this.toggle}
          target="#popover-1"
        >
          <PopoverHeader>Title here</PopoverHeader>
          <PopoverBody>
            Added to Basket
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

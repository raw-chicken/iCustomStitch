import React from "react";
import { Card, Stack, Container, Row, Col, Image, Button } from 'react-bootstrap';
import ClearIcon from '@mui/icons-material/Clear';
import * as ReactDOM from 'react-dom';

import { convert } from "./utils/form_utils";

class FileDisplay extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteFile = this.deleteFile.bind(this);
    console.log("Prop: ", props);
    console.log("Prop file: ", props.file);
    this.objectUrl = URL.createObjectURL(props.file)
    // this.state = {
    //   justClicked: null,
    //   letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    // };
  }

  handleClick(e) {
    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  componentWillUnmount() {
    URL.revokeObjectURL(this.objectUrl);
  }

  render() {
    return (
      <Card body>
        <Container>
          <Stack>
            <Row>
              <Col xs={4}>
                <Image src={this.objectUrl} fluid/>
                {console.log("objecturl", this.objectUrl)}
              </Col>
              <Col>
                <div>{this.props.file.name}</div>
                <div>Size: {convert(this.props.file.size)}</div>
              </Col>
              <Col xs={1}>
                <Button variant="light" onClick={() => ReactDOM.flushSync(this.props.delete(this.props.file.name))}>
                  <ClearIcon />
                </Button>
                
              </Col>
            </Row>
          </Stack>
        </Container>

      </Card>
    )
  }
}

export default FileDisplay;
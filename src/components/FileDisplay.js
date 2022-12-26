import React from "react";
import { Card, Stack, Container, Row, Col, Image, Button } from 'react-bootstrap';
import ClearIcon from '@mui/icons-material/Clear';
import * as ReactDOM from 'react-dom';

import { convert } from "./utils/form_utils";

class FileDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.objectUrl = URL.createObjectURL(props.file)
    console.log("Created objectURL for ", props.file.name, "at", this.objectUrl)
  }

  componentWillUnmount() {
    console.log("Revoking:", this.objectUrl, this.props.file.name)
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
              </Col>
              <Col>
                <div>{this.props.file.name}</div>
                <div>Size: {convert(this.props.file.size)}</div>
              </Col>
              <Col xs={1}>
                {/* <Button variant="light" onClick={() => ReactDOM.flushSync(this.props.delete(this.props.file.name))}>
                  <ClearIcon />
                </Button> */}
                <Button variant="light" onClick={() => this.props.delete(this)}>
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
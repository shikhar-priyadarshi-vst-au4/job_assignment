import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Input } from '../Components/Input'
import { Key } from '../Components/Button';
import  Slate   from '../Containers/Slate'
export function Board(Props){
   return(
<Fragment>
 { !Props.isCreated &&<div className = "border border-highlight w-50">
    <Row>
        <Col sm={12} className= "d-flex justify-content-center mt-4">
          <div>
            <Input slateName={ Props.slateName }
                  ChangeHandler={ Props.ChangeHandler }
                  for="Board"/> 
          </div>
        </Col>
    </Row>
     
    <Row>
       <Col className="text-center my-3">
          <Key ClickHandler = { Props.ClickHandler }
          for={'Board'}/>
       </Col>
    </Row>
 </div>}
 { Props.isCreated && <Slate/>}
</Fragment>
   ) 
}

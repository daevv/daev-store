import Accordion from 'react-bootstrap/Accordion';

const MyAccordion = () => {
    return ( 
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    First option
                </Accordion.Header>
                <Accordion.Body>
                    Bla bla bla
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    Second option
                </Accordion.Header>
                <Accordion.Body>
                    Bla bla bla
                    Bla bla bla
                    Bla bla bla
                    Bla bla bla
                    Bla bla bla
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
     );
}
 
export default MyAccordion;
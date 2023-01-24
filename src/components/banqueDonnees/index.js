import React from 'react';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Modal, Card, Collapse, theme } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import './banque.css'



const { Panel } = Collapse;

function Banque(){

    const [modal2Open, setModal2Open] = useState(false);

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };

   return(
     <>
     
        
        <Grid  id='theme'>
            <div id='theme1'>
                <a href='#' className='theme2' id='theme2_plus'>Thémes</a>
                <a href='#' onClick={() => setModal2Open(true)} className='theme2'>Education</a>
                <a href='#' className='theme2'>Environnement</a>
                <a href='#'className='theme2'>Santé</a>
                <a href='#'className='theme2'>Culture</a>
                <a href='#'className='theme2'>Sport</a>
                <a href='#'className='theme2'>Agriculture</a>
                <a href='#'className='theme2'>Commerce</a>

            </div>
        </Grid>
   
 
    <Modal
        className='modal'
        bodyStyle={{height: 400, backgroundColor: 'rgba(217,217,217,0.45)'}}
        title="Banque de questions pour:  Education"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        width={900}

        >

        <Grid container>
            <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 16,
                        marginTop: 10,
                        marginLeft: 20,
                        height: 100,
                        
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333'}}>Quel est votre age?</a>
                </Card>
            </Grid>
            <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 16,
                        marginTop: 10,
                        marginLeft: 20,
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Votre enfant lit-il souvent pour le plaisir?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>

        <Grid container>
        <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 16,
                        marginTop: 10,
                        marginLeft: 20
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Votre enfant fait-il des efforts dans ses taches scolaires?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
            <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 16,
                        marginTop: 10,
                        marginLeft: 20
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Faites-vous des efforts pour aider votre enfant à apprendre à la maison?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>

        <Grid container>
        <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 16,
                        marginTop: 10,
                        marginLeft: 20
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Dans quelle mesure l'école valorise-t-elle la diversité des origines des enfants?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
            <Grid item xs = {6}>
                <Card
                    bordered={false}
                    style={{
                        width: 400,
                        fontSize: 16,
                        marginTop: 10,
                        marginLeft: 20
                    }}
                    hoverable
                    >
                    <a href='#' style={{ color:'#333' }}>Selon vous, les enfants aiment-ils l'école?</a>
                    <Collapse
                        bordered={false}

                        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                        style={{
                            background: token.colorBgContainer,
                        }}
                        >
                        <Panel header="Afficher les réponses" key="1">
                        <p style={{ color:'#2A9E9E' }}>oui</p>
                        <p style={{ color:'#2A9E9E' }}>non</p>
                        </Panel>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>
        
        </Modal>
     </>
    );
}

export {Banque};

  
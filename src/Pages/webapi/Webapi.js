import Header from "../../components/header";
import './webapi.css'
import web3 from '../../images/web3.PNG';
import sicons1 from '../../images/sicons3.png';
import sicons3 from '../../images/sicons2.png';
import sicons2 from '../../images/sicons1.png';
import { useState } from "react";
import { useEffect } from "react";
//{'ep1': 'RPCG', 'ep2':'RPC', 'ep3':'WS'}


const Webapi = () => {

    const cards = [
        {'name': 'Concordium', 'request': 320000, 'code':'CCO',
         'quantity': 2, 'id': 1, 'endpoints':[
            {'epname':'RPCG', 'epurl':'https://rpcg.com', 'id':1}, 
            {'epname':'RPC', 'epurl':'https://rpc.com', 'id':2},
            {'epname':'WS', 'epurl':'https://ws.com', 'id':3}
            ],
          'picture': sicons2
        },
        {'name': 'Eager Net', 'request': 30000, 'code':'EGN',
         'quantity': 0, 'id': 2, 'endpoints':[
            {'epname':'RPCG', 'epurl':'https://rpcg.com', 'request':2300, 'id':4}, 
            {'epname':'RPC', 'epurl':'https://rpc.com', 'request':230, 'id':5}
            ],
          'picture': sicons3
        },
        {'name': 'Fetch AI', 'request': 72430, 'code':'FET',
         'quantity': 5, 'id': 3, 'endpoints':[
            {'epname':'RPCG', 'epurl':'https://rpcg.com', 'request':2300, 'id':6}, 
            {'epname':'RPC', 'epurl':'https://rpc.com', 'id':7},
            {'epname':'WS', 'epurl':'https://ws.com', 'id':8},
            {'epname':'REST', 'epurl':'https://rest.com', 'id':9}
            ],
          'picture': sicons1
        },
        {'name': 'lithium Network', 'request': 7240, 'code':'LTH',
         'quantity': 0, 'id': 4, 'endpoints':[
            {'epname':'RPC', 'epurl':'https://rpc.com', 'id':10}
            ],
          'picture': sicons1
        }
    ]


    const [selectedEpname, setSelectedepname] = useState({});

    useEffect(() => {
        const initialurl = {};
        cards.forEach((card) => {
            if (card.endpoints.length > 0) {
                initialurl[card.id] = card.endpoints[0].epurl;
            }
        });
        setSelectedepname(initialurl);
    }, []);

    const handleBotton = (epurl, cardid) => {
        setSelectedepname((prevState) => ({
            ...prevState,
            [cardid]: epurl,
        }));
    };



    return (
        <div className="web-api-page">
            <Header/>

            <div className='top-frame'>
                <div className='text-bg'>
                    <img src={web3} alt="img" />
                    <div className='lft-tx'>
                        <h1>Lithium Web3 APIs</h1>
                        <p>Choose from our list of reliable networks
                        </p>
                    </div>
                </div>
            </div>

            <div className="neww">
                {cards.map((card) => (
                    <div className="apis-bg" key={card.id}>
                        <div className="api-card">
                            <div className="top-card" style={{display: 'flex', alignItems:'center', gap:'20px'}}>
                                <img src={card.picture} width={100} height={100} alt="img" />
                                <div className='lft-tx'>
                                    <h1>{card.name}</h1>
                                    <p>{card.code} <>{ card.quantity > 0 ? <span style={{color:'green'}}>Available</span>
                                     : <span style={{color:'red'}}>Degraded</span> 
                                    }</> </p>
                                </div>
                            </div>

                            <div className="middle-card">
                                {card.endpoints.map((ep) =>(
                                    <div key={ep.id} >
                                        <button onClick={() => handleBotton(ep.epurl, card.id)}>{ep.epname}</button>
                                    </div>
                                ))}
                            </div>
                            <div className="last-card">
                                <h4>Endpoint URL</h4>
                                <div className="xx" style={{background: '#fff', display:'flex', padding:'15px',justifyContent:'space-between'}}>
                                    {card.endpoints.map((e2) =>(
                                        <div key={e2.id} >
                                            {selectedEpname[card.id] === e2.epurl && <span style={{flex:'20%'}}>{e2.epurl}</span >}
                                        </div>
                                    ))} <span style={{flex:'5%', textAlign:'right'}}>copy</span>
                                </div>
                                <div style={{display:'flex', justifyContent:'space-between', marginTop:'30px'}}> 
                                    <span>Total requests (7 days)</span>
                                    <span> {card.request} </span> 
                                </div>       
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
 
export default Webapi;
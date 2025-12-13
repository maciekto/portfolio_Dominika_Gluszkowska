import React, {useState, useEffect} from 'react';
import MyWorks_1 from '../../assets/Mobile/myWorks_1.png';
import MyWorks_2 from '../../assets/Mobile/myWorks_2.png';
import MyWorks_3 from '../../assets/Mobile/myWorks_3.png';
import MyWorks_4 from '../../assets/Mobile/myWorks_4.png';
import MyWorks_5 from '../../assets/Mobile/myWorks_5.png';
import MyWorks_5_1 from '../../assets/Mobile/myWorks_5_1.png';
import MyWorks_6 from '../../assets/Mobile/myWorks_6.png';
import MyWorks_7 from '../../assets/Mobile/myWorks_7.png';
import MyWorks_8 from '../../assets/Mobile/myWorks_8.png';
import MyWorks_1PC from '../../assets/Desktop/myWorks_1.png';
import MyWorks_2PC from '../../assets/Desktop/myWorks_2.png';
import MyWorks_3PC from '../../assets/Desktop/myWorks_3.png';
import MyWorks_4PC from '../../assets/Desktop/myWorks_4.png';
import MyWorks_5PC from '../../assets/Desktop/myWorks_5.png';
import MyWorks_5_1PC from '../../assets/Desktop/myWorks_5_1.png';
import MyWorks_6PC from '../../assets/Desktop/myWorks_6.png';
import MyWorks_7PC from '../../assets/Desktop/myWorks_7.png';
import MyWorks_8PC from '../../assets/Desktop/myWorks_8.png';
import MyWorks_arrow from '../../assets/Mobile/myWorks_arrow.png';

export default function MyWorks() {
    const [width, setWidth] = useState(window.innerWidth);


    const [Visualizations, setVisualizations] = useState('MyWorks-Sections-Works-Visualizations_off');
    const [VisualizationsArrow, setVisualizationsArrow] = useState('MyWorks-Sections-Title-Arrow-Visualizations_off');
    const [VisualizationsImg, setVisualizationsImg] = useState('MyWorks-Sections-Works-Visualizations_off_img');

    const [Drawings, setDrawings] = useState('MyWorks-Sections-Works-Drawings_off');
    const [DrawingsArrow, setDrawingsArrow] = useState('MyWorks-Sections-Title-Arrow-Drawings_off');
    const [DrawingsImg, setDrawingsImg] = useState('MyWorks-Sections-Works-Drawings_off_img');

    const [Banner, setBanner] = useState('MyWorks-Sections-Works-Banner_off');
    const [BannerArrow, setBannerArrow] = useState('MyWorks-Sections-Title-Arrow-Banner_off');
    const [BannerImg, setBannerImg] = useState('MyWorks-Sections-Works-Banner_off_img');

    
    
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);
    const clickSection = (type) => {
        if(type === 'Visualizations') {
            Visualizations === 'MyWorks-Sections-Works-Visualizations_off' ?
                setVisualizations('') 
                : 
                setVisualizations('MyWorks-Sections-Works-Visualizations_off');

            VisualizationsArrow === 'MyWorks-Sections-Title-Arrow-Visualizations_off' ? 
                setVisualizationsArrow('') 
                : 
                setVisualizationsArrow('MyWorks-Sections-Title-Arrow-Visualizations_off');

            VisualizationsImg === 'MyWorks-Sections-Works-Visualizations_off_img' ? 
                setTimeout(() => {
                    setVisualizationsImg('') 
                }, 200)
                :
                setTimeout(() => {
                    setVisualizationsImg('MyWorks-Sections-Works-Visualizations_off_img');
                }, 200); 
        } else if(type === 'Banners') {
            Banner === 'MyWorks-Sections-Works-Banner_off' ? 
                setBanner('MyWorks-Sections-Works-Banner') 
                :
                setBanner('MyWorks-Sections-Works-Banner_off');

            BannerArrow === 'MyWorks-Sections-Title-Arrow-Banner_off' ? 
                setBannerArrow('') 
                :
                setBannerArrow('MyWorks-Sections-Title-Arrow-Banner_off');

            BannerImg === 'MyWorks-Sections-Works-Banner_off_img' ? 
                setTimeout(() => { 
                    setBannerImg('') 
                }, 200) 
                :
                setTimeout(() => {
                    setBannerImg('MyWorks-Sections-Works-Banner_off_img');
                }, 200); 
        } else if(type === 'Drawings') {
            Drawings === 'MyWorks-Sections-Works-Drawings_off' ? 
                setDrawings('MyWorks-Sections-Works-Drawings') 
                : 
                setDrawings('MyWorks-Sections-Works-Drawings_off');

            DrawingsArrow === 'MyWorks-Sections-Title-Arrow-Drawings_off' ?
                setDrawingsArrow('') 
                :
                setDrawingsArrow('MyWorks-Sections-Title-Arrow-Drawings_off');
                
            DrawingsImg === 'MyWorks-Sections-Works-Drawings_off_img' ?
                setTimeout(() => {
                    setDrawingsImg('') 
                }, 200)
                : setTimeout(() => {
                    setDrawingsImg('MyWorks-Sections-Works-Drawings_off_img');
                }, 200); 
        }
        
    }
    return (
        <div className="MyWorks" id="myWorks">
            <div className='MyWorks-Title'>
                My&nbsp;Works
            </div>
            <div className='MyWorks-Sections'>
                {width > 1366 ? null : <div className='MyWorks-Sections-Title MyWorks-Sections-Title-Visualizations' onClick={() => clickSection('Visualizations')}>
                    Visualizations
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${VisualizationsArrow}`}/>
                </div> }
                <div className={`MyWorks-Sections-Works ${width > 1366 ? null : Visualizations}`}>
                    <img src={width > 1366 ? MyWorks_1PC : MyWorks_1} className={width > 1366 ? null : VisualizationsImg}/>
                    <img src={width > 1366 ? MyWorks_2PC : MyWorks_2} className={width > 1366 ? null : VisualizationsImg}/>
                </div>
                {width > 1366 ? null : <div className='MyWorks-Sections-Title MyWorks-Sections-Title-Banners' onClick={() => clickSection('Banners')}>
                    Banners
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${BannerArrow}`}/>
                </div>}
                <div className={`MyWorks-Sections-Works ${width > 1366 ? null : Banner}`}>
                    <img src={width > 1366 ? MyWorks_3PC : MyWorks_3} className={width > 1366 ? null : BannerImg}/>
                    <img src={width > 1366 ? MyWorks_4PC : MyWorks_4} className={width > 1366 ? null : BannerImg}/>
                    <img src={width > 1366 ? MyWorks_5PC : MyWorks_5} className={width > 1366 ? null : BannerImg}/>
                    <img src={width > 1366 ? MyWorks_5_1PC : MyWorks_5_1} className={width > 1366 ? null : BannerImg}/>
                </div>
                {width > 1366 ? null : <div className='MyWorks-Sections-Title MyWorks-Sections-Title-Drawings' onClick={() => clickSection('Drawings')}>
                    Drawings
                    <img src={MyWorks_arrow}  className={`MyWorks-Sections-Title-Arrow ${DrawingsArrow}`}/>
                </div>}
                <div className={`MyWorks-Sections-Works ${width > 1366 ? null : Drawings}`}>
                    <img src={width > 1366 ? MyWorks_6PC : MyWorks_6} className={width > 1366 ? null : DrawingsImg}/>
                    <img src={width > 1366 ? MyWorks_7PC : MyWorks_7} className={width > 1366 ? null : DrawingsImg}/>
                    <img src={width > 1366 ? MyWorks_8PC : MyWorks_8} className={width > 1366 ? null : DrawingsImg}/>
                </div>
            </div>
        </div>
    )
}

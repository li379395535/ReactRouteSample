import React,{FC} from 'react';
import {Route, Link, RouteComponentProps,Switch } from "react-router-dom";

const ModalSwitch:FC<RouteComponentProps>=(props)=>{
    const {location} = props;
    // const [previousLocation, setPreviousL]  = useState(location);
    // const [modal, setModel] = useState(false);

    const previousLocation = location.state ? location.state.previousLocation:{};

    let isModal = !!(
        location.state &&
        location.state.modal 
      );
    
    return (
        <div>
            <Switch location={isModal? previousLocation:location}>
                <Route exact path="/modalgallery" component={Home} />
                <Route path="/modalgallery/gallery" component={Gallery} />
                <Route path="/modalgallery/img/:id" component={ImageView} />
            </Switch>
            {isModal ? <Route path="/modalgallery/img/:id" component={Modal} /> : null}
        </div>
    )
}

interface ImageType{
    id:number;
    title:string;
    color:string;
}

const IMAGES:ImageType[] = [
    { id: 0, title: "Dark Orchid", color: "DarkOrchid" },
    { id: 1, title: "Lime Green", color: "LimeGreen" },
    { id: 2, title: "Tomato", color: "Tomato" },
    { id: 3, title: "Seven Ate Nine", color: "#789" },
    { id: 4, title: "Crimson", color: "Crimson" }
  ];

interface ColorType{
    color:string;
}

const Thumbnail:FC<ColorType>=({ color })=> {
    return (
      <div
        style={{
          width: 50,
          height: 50,
          background: color
        }}
      />
    );
  }
  
const Image:FC<ColorType>=({ color })=>{
    return (
      <div
        style={{
          width: "100%",
          height: 400,
          background: color
        }}
      />
    );
  }
  
const Home:FC=() => {
    return (
      <div>
        <Link to="/modalgallery/gallery">Visit the Gallery</Link>
        <h2>Featured Images</h2>
        <ul>
          <li>
            <Link to="/modalgallery/img/2">Tomato</Link>
          </li>
          <li>
            <Link to="/modalgallery/img/4">Crimson</Link>
          </li>
        </ul>
      </div>
    );
  }
  
const Gallery:FC<RouteComponentProps>=({location})=> {
    return (
      <div>
        {IMAGES.map(i => (
          <Link
            key={i.id}
            to={{
              pathname: `/modalgallery/img/${i.id}`,
              // this is the trick!
              state: { 
                modal: true, 
                previousLocation:location
              }
            }}
          >
            <Thumbnail color={i.color} />
            <p>{i.title}</p>
          </Link>
        ))}
      </div>
    );
  }

interface ImageViewParams{
    id:string;
}
  
const ImageView:FC<RouteComponentProps<ImageViewParams>>=({ match })=> {
    let image = IMAGES[parseInt(match.params.id, 10)];
  
    if (!image) return <div>Image not found</div>;
  
    return (
      <div>
        <h1>{image.title}</h1>
        <Image color={image.color} />
      </div>
    );
  }
  
const Modal:FC<RouteComponentProps<ImageViewParams>>=({ match, history })=> {
    let image = IMAGES[parseInt(match.params.id, 10)];
  
    if (!image) return null;
  
    let back = (e:React.MouseEvent) => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "10%",
            right: "10%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <h1>{image.title}</h1>
          <Image color={image.color} />
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    );
  }
  
  function ModalGallery() {
    return (
        <Route component={ModalSwitch} />
    );
  }
  
  export default ModalGallery;
import './App.css';
import Header from "./components/Header";
import data from './data';
import Item from './components/Item';

export default function App() {
    const dataArr = data.map(el => {
        return (<Item
            title={el.title}
            location={el.location}
            googleMapsUrl={el.googleMapsUrl}
            startDate={el.startDate}
            endDate={el.endDate}
            description={el.description}
            imageUrl={el.imageUrl}
        />)
    })

    return (
        <div className='app'>
            <Header />
            <div className="container">
                {dataArr}
            </div>
        </div>
    )
}

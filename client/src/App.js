import "./App.css";
import { MovieDetails } from "./components/MovieDetails";

function App() {
    return (
        <div className="App">
            <div>
                <h1 className="theatre-name">Prince's Theatre</h1>
                <MovieDetails />
            </div>
        </div>
    );
}

export default App;

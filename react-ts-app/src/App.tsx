import { ContadorRed } from "./components/ContadorRed";
import { Counter }     from "./components/Counter";
import { Form }        from "./components/Form";
import { TimerPadre }  from "./components/TimerPadre";
import { User }        from "./components/User";

const App = () => {
    return (
        <>
            <h1>Hello World</h1>
            <hr />
            <Counter />
            <hr />
            <User />

            <hr />
            <TimerPadre />

            <hr />
            <ContadorRed />

            <hr />
            <Form />
            <br />
            <br />
            <br />
        </>
    );
}

export default App;

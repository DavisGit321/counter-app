import React, { Component } from "react"
import Counter from "./counter"
class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onInc } = this.props;
        return (<div>
            <button
                onClick={onReset}
                className="btn btn-primary btn-sm m-2"
            >
                Reset
                </button>
            {counters.map(counter =>
                <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onInc={onInc}
                    counter={counter}
                >
                </Counter>)}
        </div>);
    }
}

export default Counters;
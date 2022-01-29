import axios from "axios";
import React from "react";
import "./style.css";

const API_URL = 'https://ttt-course-server.herokuapp.com'

const Table = (props) => {
    const { table, currentMove, player, gameId, setTable } = props;

    const handleCellClick = (cellNumber) => () => {
        if (currentMove === player) {
            axios.post(API_URL + "/make-move", {
                gameId,
                player,
                cellNumber,
            })
                .then((response) => {
                    const table = response.data;
                    setTable(table);
                })
        }
    };

    return <div className="table">
        <div className="row">
            <div className="cell" onClick={handleCellClick(0)}>{table[0]}</div>
            <div className="cell" onClick={handleCellClick(1)}>{table[1]}</div>
            <div className="cell" onClick={handleCellClick(2)}>{table[2]}</div>
        </div>
        <div className="row">
            <div className="cell" onClick={handleCellClick(3)}>{table[3]}</div>
            <div className="cell" onClick={handleCellClick(4)}>{table[4]}</div>
            <div className="cell" onClick={handleCellClick(5)}>{table[5]}</div>
        </div>
        <div className="row">
            <div className="cell" onClick={handleCellClick(6)}>{table[6]}</div>
            <div className="cell" onClick={handleCellClick(7)}>{table[7]}</div>
            <div className="cell" onClick={handleCellClick(8)}>{table[8]}</div>
        </div>
    </div>
};

export default Table;
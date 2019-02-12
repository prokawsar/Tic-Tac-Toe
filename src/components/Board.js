import React from 'react';

function Square(props){
  let fStyle= {
            backgroundColor: props.highligt? 'yellow': 'white'
          };

    return (
      <button style={fStyle} className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

class Board extends React.Component {

  renderSquare(i, highligt) {
    return <Square value={this.props.squares[i]} highligt={highligt} onClick={()=>this.props.onClick(i)} />;
  }

  renderBoard(){
    let board=[], si=0;

    for(let i=0; i<3; i++){
      let childs=[];

      for(let j=0; j<3; j++){
        let highligt=false;
        if(this.props.winner && this.props.winner.indexOf(si)>-1) highligt=true;
        let cell=this.renderSquare(si++, highligt);
        childs.push(cell);
      }
      board.push(<div className="board-row">{childs}</div>);
    }
    return board;
  }

  render() {

    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}

export default Board
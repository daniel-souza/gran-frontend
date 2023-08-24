import { Component } from 'react'

const darkColor = 'bg-red-800 text-blue-200 hover:bg-red-600';
const lightColor = 'bg-blue-800 text-red-200 hover:bg-blue-600';

export default class ButtonClassLifeCycle extends Component {
  constructor(props) {
    super(props)
    this.limit = 10;
    this.state = {
      count: 0
    };
    console.log('constructor');
  }

  component

  componentDidMount() {
    console.log('componentDidMount (ButtonClassLifeCycle)');
    document.title = `Componente ButtonClassLifeCycle montado!`;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate (ButtonClassLifeCycle)');
    document.title = `Você clicou ${this.state.count} vezes`;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount (ButtonClassLifeCycle)');
    document.title = `Componente ButtonClassLifeCycle será desmontado!`;
    alert('O componente será desmontado');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate (ButtonClassLifeCycle)');
    if(this.state.count !== nextState.count && this.state.count < this.limit) return true;
    if(this.props.darkMode !== nextProps.darkMode) return true;
    return false;
  }

  render() {
    console.log('render (ButtonClassLifeCycle)');
    return (
      <div className='m-10 flex items-center justify-center'>
        <button className={`p-5 ${this.props.darkMode ? darkColor: lightColor } rounded-md text-2xl font-bold`}
                onClick={() => this.setState({ count: this.state.count + 1 })}>
          Cliques: {this.state.count}
        </button>
      </div>
    )
  }
}

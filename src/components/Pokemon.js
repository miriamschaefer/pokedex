import React from 'react';

class Pokemon extends React.Component {
  render() {
    const pokemonTypes = this.props.types;
    const types = pokemonTypes.map((type, index) => {
      return <li key={index}>{type}</li>;
    });

    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.url} />
        <p>
          {this.props.evolution === null
            ? 'Primera evolución'
            : this.props.evolution}
        </p>
        <ul>{types}</ul>
      </div>
    );
  }
}

Pokemon.defaultProps = {
  evolution: 'No evoluciona',
};

export default Pokemon;

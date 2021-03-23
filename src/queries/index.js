import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons ($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
      count
      results {
          name
          image
      }
    }
  }
`

export const GET_POKEMON_DETAIL = gql`
  query pokemon ($name: String!) {
    pokemon(name: $name) {
      name
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
        back_default
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`
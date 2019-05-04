import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPerson } from './store/actions/person';
import { Dispatch } from 'redux';
import { ApplicationState } from './store';
import { isArrayNotEmpty } from './utils/array';

const App: React.FC<ReduxType> = (props: ReduxType) => {
  const { fetchPerson, person } = props;
  const { isLoading, error, persons } = person;
  useEffect(() => {
    fetchPerson();
  }, [fetchPerson]);

  return (
    <div className="container">
        {isLoading && <span>Loading</span>}
        {error && <span>Error</span>}
        <div className="row">
        {isArrayNotEmpty(persons) &&
          persons.map((person: Person, index: number) =>
          <div className="col col-sm-12 col-lg-3" key={index}>
            <div className="card">
              <img src={person.picture.large} className="card-img-top" alt={person.picture.thumbnail} />
              <div className="card-body">
                <h5 className="card-title">{person.name.first} {person.name.last}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{person.location.city}</h6>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias praesentium unde, provident voluptatem minus possimus eligendi deserunt ex omnis?</p>
                <button className="btn btn-primary">Check Profile ></button>
              </div>
            </div>
          </div>
          )
        }
        </div>
    </div>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  person: state.person,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchPerson: () => dispatch(fetchPerson()),
  };
};

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, { fetchPerson })(App);
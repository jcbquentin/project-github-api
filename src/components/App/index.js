import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from 'src/components/ReposResults';
import PlaceHolders from 'src/components/ReposResults/PlaceHolders';
import Nav from 'src/components/Nav';
import Faq from 'src/components/Faq';
import LoadMore from 'src/components/LoadMore';

import gitHubLogo from 'src/assets/images/logo-github.png';

import './app.scss';

const simplifyRepos = (repos) => repos.map(
  (repo) => ({
    id: repo.id,
    name: repo.name,
    description: repo.name,
    avatar_url: repo.owner.avatar_url,
    login: repo.owner.login,
  }),
);

const nbPerPage = 9;

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState('Saisir votre recherche et valider par entrée');
  const [isError, setIsError] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(true);

  const [search, setSearch] = useState('');

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState(null);

  const displayMessage = (message, isError = false) => {
    setIsMessageVisible(true);
    setMessage(message);
    setIsError(isError);
  };

  const launchSearch = () => {
    setLoading(true);

    setRepos([]);

    setCount(0);

    displayMessage('Recherche en cours...');

    axios
      .get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=${nbPerPage}`)
      .then(
        (response) => {
          setRepos(simplifyRepos(response.data.items));
          displayMessage(`La recherche a donné ${response.data.total_count} résultat(s).`);

          setPage(1);
          setCount(response.data.total_count);
          setQuery(search);
        },
      ).catch(
        () => {
          displayMessage('Une erreur est survenue, merci d\'essayer à nouveau...', true);
        },
      ).finally(
        () => {
          setLoading(false);
        },
      );
  };

  const loadMore = () => {
    setLoading(true);

    axios
      .get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&page=${page + 1}&per_page=${nbPerPage}`)
      .then(
        (response) => {
          setRepos([...repos, ...simplifyRepos(response.data.items)]);

          setPage(page + 1);
        },
      ).catch(
        () => {
          displayMessage('Une erreur est survenue, merci d\'essayer à nouveau...', true);
        },
      ).finally(
        () => {
          setLoading(false);
        },
      );
  };

  return (
    <div className="app">
      <Image src={gitHubLogo} size="medium" centered alt="gitHub logo" />
      <Nav />
      <Route path="/" exact>
        <SearchBar
          search={search}
          setSearch={setSearch}
          manageSubmit={launchSearch}
          loading={loading}
        />
        {isMessageVisible && (
        <Message
          message={message}
          isError={isError}
          setIsMessageVisible={setIsMessageVisible}
        />
        )}
        <ReposResults repos={repos} />
        {loading && <PlaceHolders />}
        {page * nbPerPage < count && <LoadMore loadMore={loadMore} loading={loading} />}
      </Route>
      <Route path="/faq" exact>
        <Faq />
      </Route>
    </div>
  );
};

export default App;

import renderer from 'react-test-renderer'
import GithubCard from './GitHubCard';


test('renders a snapshot for github card', () => {
  const tree = renderer.create(<GithubCard />).toJSON()
 
  expect(tree).toMatchSnapshot();
});

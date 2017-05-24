const data = {
  login: 'viniazvd',
  id: 14836763,
  avatar_url: 'https://avatars3.githubusercontent.com/u/14836763?v=3',
  gravatar_id: '',
  url: 'https://api.github.com/users/viniazvd',
  html_url: 'https://github.com/viniazvd',
  followers_url: 'https://api.github.com/users/viniazvd/followers',
  following_url: 'https://api.github.com/users/viniazvd/following{/other_user}',
  gists_url: 'https://api.github.com/users/viniazvd/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/viniazvd/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/viniazvd/subscriptions',
  organizations_url: 'https://api.github.com/users/viniazvd/orgs',
  repos_url: 'https://api.github.com/users/viniazvd/repos',
  events_url: 'https://api.github.com/users/viniazvd/events{/privacy}',
  received_events_url: 'https://api.github.com/users/viniazvd/received_events',
  type: 'User',
  site_admin: false,
  name: 'Vinicius Azevedo',
  company: null,
  blog: '',
  location: 'RJ',
  email: 'viniazvd@gmail.com',
  hireable: null,
  bio: 'php - java - nodejs',
  public_repos: 6,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: '2015-09-25T12:23:24Z',
  updated_at: '2017-05-16T21:05:27Z',
  private_gists: 0,
  total_private_repos: 0,
  owned_private_repos: 0,
  disk_usage: 3656,
  collaborators: 0,
  two_factor_authentication: false,
  plan:
  { name: 'free',
    space: 976562499,
    collaborators: 0,
    private_repos: 0
  }
}

const allowedFields = [
  'login',
  'id',
  'avatar_url',
  'name',
  'company',
  'blog',
  'location',
  'email',
  'hireable'
]

const isAllowedField = ( field ) => allowedFields.includes( field )
const toFinalObject = ( data ) => ( obj, field ) =>
  Object.assign( {}, obj, { [field]: data[field] } )

const result = Object.keys( data )
                      .filter( isAllowedField )
                      .reduce( toFinalObject( data ), {} )

console.log('result', result)
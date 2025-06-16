import chefLogo from '../images/chef-claude-icon.png'

export default function Header() {
    return (
        <header>
            <img src={chefLogo} alt="chef icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}
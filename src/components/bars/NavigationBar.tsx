import React, { Component } from 'react'
import * as t from 'prop-types'
import './NavigationBar.sass'
import './Hamburgers.css'
import { Icon } from '../icon/Icon';
import { LogoName } from '../icon/LogoName';
import { NavigationItem } from '../../interfaces/NavigationItem';

export class NavigationBar extends Component {

    public static propTypes = {
        items: t.arrayOf(t.object.isRequired).isRequired
    }

    public static defaultProps = {
        items: []
    }

    public state = {
        isNavBarCollapsed: false,
        isNavBarSmall: false,
    }

    public componentWillMount = () => {
        const RESIZE_THRESH = 992
        this.setState({ isNavBarSmall: window.innerWidth < RESIZE_THRESH })
        function handleResize(ts: any) {
            ts.setState({ isNavBarSmall: window.innerWidth < RESIZE_THRESH })
        }
        window.addEventListener('resize', () => handleResize(this))
    }

    public render() {

        const navigationItems = (this.props as any).items as NavigationItem[];

        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" rel="home" href="/" title="Brewery Recording">
                <Icon name={LogoName.BLogo} width={60} height={60} />
                </a>
                <a className={`navbar-brand ${this.state.isNavBarSmall ? 'text-center' : 'text-left'}`} href="/">
                    <div className="h4 p-0 m-0">Brewery Recording</div>
                    {
                        !this.state.isNavBarSmall &&
                        <div>
                            <div className="h6 p-0 m-0">New York | Los Angeles</div>
                            <div className="h6 p-0 m-0">(844) 717 - 2739</div>
                        </div>
                    }
                </a>
                <button onMouseDown={() => this.toggleNavBar()} className={`navbar-toggler hamburger ${this.state.isNavBarCollapsed ? '' : 'is-active'}`} type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarText" aria-label="toggleNavBar">
                    <div className={`hamburger hamburger--minus  ${this.state.isNavBarCollapsed ? '' : 'is-active'}`}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                    </div>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto" id="menu">
                        {
                            navigationItems.map((item:NavigationItem) => 
                                <li className="nav-item" data-menuanchor="Home">
                                    <a className="nav-link" href={item.url}>{item.title}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        )
    }

    private toggleNavBar = (show:boolean = this.state.isNavBarCollapsed) => {
        this.setState({ isNavBarCollapsed: !show })
    }

}
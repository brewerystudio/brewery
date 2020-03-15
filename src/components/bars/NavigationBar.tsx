import React, { Component } from 'react'
import * as t from 'prop-types'
import './NavigationBar.sass'
import './Hamburgers.css'
import { Icon } from '../icon/Icon';
import { LogoName } from '../icon/LogoName';
import { NavigationItem } from '../../interfaces/NavigationItem';
import { DeviceUtil } from '../../utils/Device';

export class NavigationBar extends Component {

    public static propTypes = {
        items: t.arrayOf(t.object.isRequired).isRequired,
        onResize: t.func, // onResize(width:number, height:number)
    }

    public static defaultProps = {
        items: [],
        onResize: ()=>{},
    }

    public state = {
        isNavBarCollapsed: false,
        isNavBarSmall: false,
        isNavBarTiny: false,
    }

    public componentWillMount = () => {
        this.onResize(DeviceUtil.getWidth(), DeviceUtil.getHeight())
        DeviceUtil.onResize(this.onResize)
    }

    public render() {

        const navigationItems = (this.props as any).items as NavigationItem[];

        return (
            <div ref={r => this.onNavbarResize(r)} className={'navbar-wrapper d-inline-block position-absolute'}>
                <nav className="navbar navbar-expand-lg navbar-dark position-relative">
                    <a className="navbar-brand" rel="home" href="/" title="Brewery Recording">
                    <Icon name={LogoName.BLogo} width={50} height={50} />
                    </a>
                    <a className={`navbar-brand ${this.state.isNavBarSmall ? 'text-center' : 'text-left'}`} href="/">
                        { !this.state.isNavBarTiny && <div className="h4 p-0 m-0 line-none">Brewery {!this.state.isNavBarSmall ? 'Recording' : ''} Studio</div> }
                        {
                            !this.state.isNavBarSmall &&
                            <div>
                                <div className="h7 p-0 m-0 line-regular">New York | Los Angeles</div>
                                <div className="h7 p-0 m-0 line-regular">(844) 717 - 2739</div>
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
                                navigationItems.map((item:NavigationItem, idx:number) => 
                                    <li key={`nb-${idx}`} className="nav-item" data-menuanchor="Home">
                                        <a className="nav-link" href={item.url}>{item.title}</a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

    private toggleNavBar = (show:boolean = this.state.isNavBarCollapsed) => {
        this.setState({ isNavBarCollapsed: !show })
    }

    private onNavbarResize = (navbar:any) => {
        if (navbar) {
            const navbarRect = navbar.getBoundingClientRect()
            const onResize = (this.props as any).onResize
            const navbarHeight = (this.state as any).navbarHeight
            if (onResize && (!navbarHeight || navbarHeight !== navbarRect.height)) {
                this.setState({ navbarHeight: navbarRect.height })
                onResize(navbarRect.width, navbarRect.height)
            }
        }
    }
    
    private onResize = (width:number, height:number) => {
        const RESIZE_THRESH = 992
        const isNavBarSmall = width < RESIZE_THRESH
        const isNavBarTiny = !DeviceUtil.isS()
        if (this.state.isNavBarSmall !== isNavBarSmall && this.state.isNavBarTiny !== isNavBarTiny) {
            this.setState({ isNavBarSmall, isNavBarTiny })
        } else if (this.state.isNavBarSmall !== isNavBarSmall) {
            this.setState({ isNavBarSmall })
        } else if (this.state.isNavBarTiny !== isNavBarTiny) {
            this.setState({ isNavBarTiny })
        }
    }

}
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import * as _headerLinks from '../../../../data/headerLinks.json';

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  links: {
    color: '#ffffff'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    backgroundColor: '#000080',
    width: '100%'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  }
});

class HeaderSection extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => this.setState({ mobileMoreAnchorEl: event.currentTarget });
  handleMobileMenuClose = () => this.setState({ mobileMoreAnchorEl: null });

  render () {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderAllIconLinks = () => {
      return _headerLinks.items.map((item, index) => {
        return (
          <IconButton color="inherit" key={index}>
            <Link className={classes.links} to={item.link}>{item.displayName}</Link>
          </IconButton>);
      });
    };

    const renderAllMenuLinks = () => {
      return _headerLinks.items.map((item, index) => {
        return (
          <MenuItem key={index} onClick={this.handleMobileMenuClose}>
            <Link to={item.link}><p className={classes.links}>{item.displayName}</p></Link>
          </MenuItem>);
      });
    };

    const rendeMenu = (anchor, isOpen) => {
      return (
        <Menu anchorEl={anchor}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          onClose={this.handleMenuClose}
          open={isOpen}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          {renderAllMenuLinks()}
        </Menu>);
    };

    const renderDesktopMenu = rendeMenu(anchorEl, isMenuOpen);
    const renderMobileMenu = rendeMenu(mobileMoreAnchorEl, isMobileMenuOpen);

    return (
      <Fragment>
        <AppBar className={classes.root} position="static">
          <Toolbar>
            <Typography className={classes.title} color="inherit" noWrap variant="h6">
              Blue Moon Raptures
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {renderAllIconLinks()}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" color="inherit" onClick={this.handleMobileMenuOpen}>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderDesktopMenu}
        {renderMobileMenu}
      </Fragment>);
  }
}

HeaderSection.propTypes = { classes: PropTypes.object.isRequired };
export default withStyles(styles)(HeaderSection);

import React from 'react';
import PropTypes from 'prop-types';
import * as fa from 'react-icons/fa';
import * as io from 'react-icons/io';
import * as io5 from 'react-icons/io5';
import * as md from 'react-icons/md';
import * as ti from 'react-icons/ti';
import * as go from 'react-icons/go';
import * as fi from 'react-icons/fi';
import * as gi from 'react-icons/gi';
import * as wi from 'react-icons/wi';
import * as di from 'react-icons/di';
import * as ai from 'react-icons/ai';
import * as bs from 'react-icons/bs';
import * as ri from 'react-icons/ri';
import * as fc from 'react-icons/fc';
import * as gr from 'react-icons/gr';
import * as hi from 'react-icons/hi';
import * as si from 'react-icons/si';
import * as im from 'react-icons/im';
import * as bi from 'react-icons/bi';
import * as cg from 'react-icons/cg';
import * as vsc from 'react-icons/vsc';


const Icons = ({name}) => {
    const style = {
        marginRight:'5px'
    }
    if(Object.keys(bs).includes(name))
        return  React.createElement(bs[name], {style:style});
    else if(Object.keys(fa).includes(name))
        return  React.createElement(fa[name], {style:style});
    else if(Object.keys(io).includes(name))
        return  React.createElement(io[name], {style:style});
    else if(Object.keys(io5).includes(name))
        return  React.createElement(io5[name], {style:style});
    else if(Object.keys(md).includes(name))
        return  React.createElement(md[name], {style:style});
    else if(Object.keys(ti).includes(name))
        return  React.createElement(ti[name], {style:style});
    else if(Object.keys(go).includes(name))
        return  React.createElement(go[name], {style:style});
    else if(Object.keys(fi).includes(name))
        return  React.createElement(fi[name], {style:style});
    else if(Object.keys(gi).includes(name))
        return  React.createElement(gi[name], {style:style});
    else if(Object.keys(wi).includes(name))
        return  React.createElement(wi[name], {style:style});
    else if(Object.keys(di).includes(name))
        return  React.createElement(di[name], {style:style});
    else if(Object.keys(ai).includes(name))
        return  React.createElement(ai[name], {style:style});
    else if(Object.keys(ri).includes(name))
        return  React.createElement(ri[name], {style:style});
    else if(Object.keys(fc).includes(name))
        return  React.createElement(fc[name], {style:style});
    else if(Object.keys(gr).includes(name))
        return  React.createElement(gr[name], {style:style});
    else if(Object.keys(hi).includes(name))
        return  React.createElement(hi[name], {style:style});
    else if(Object.keys(si).includes(name))
        return  React.createElement(si[name], {style:style});
    else if(Object.keys(im).includes(name))
        return  React.createElement(im[name], {style:style});
    else if(Object.keys(bi).includes(name))
        return  React.createElement(bi[name], {style:style});
    else if(Object.keys(cg).includes(name))
        return  React.createElement(cg[name], {style:style});
    else if(Object.keys(vsc).includes(name))
        return  React.createElement(vsc[name], {style:style});
    else {
        return <></>
    }
};

Icons.propTypes = {

};

export default Icons;

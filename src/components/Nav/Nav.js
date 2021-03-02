import React from 'react'
import './Nav.css'
import { Icon, InlineIcon } from '@iconify/react';
import searchOutlined from '@iconify/icons-ant-design/search-outlined';

function Nav() {

    const elements = ['HOME', 'AGAMA', 'ALAM SEKITAR', 'BORNEO', 'EKONOMI', 'FEMINISME', 'GAYA HIDUP', 'HIBURAN', 'KEMANUSIAAN', 'KELUARGA', 'KERJAYA', 'KESIHATAN', 'KEUSAHAWANAN', 
                    'KEWANGAN', 'MAKANAN', 'MORALITI', 'MEDIA', 'MOTIVASI', 'PARANORMAL', 'PENDIDIKAN', 'POLITIK', 'RELATIONSHIP', 'SAINS', 'SEJARAH', 'SUKAN', 'TIP', 'UNDANG-UNDANG' ];

    const items = []

    for (const name of elements) {
        items.push(<div style={{display: "inline"}}><p className="nama">{name}</p></div>)
    }

    return (
        <div className="Nav">
            <div className="dalam">
                {items}
            </div>
            <div className="cari">
            <Icon icon={searchOutlined} style={{color: '#FFF', padding: '15px'}} />
            </div>
        </div>
        
    )
}

export default Nav

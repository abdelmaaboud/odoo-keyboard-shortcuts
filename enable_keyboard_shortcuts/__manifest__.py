# -*- coding: utf-8 -*-
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    Copyright (c) 2010-2012 Elico Corp. All Rights Reserved.
#    Author: Yannick Gouin <yannick.gouin@elico-corp.com>
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
#    its is based on another module on version 9
#    https://www.odoo.com/apps/modules/9.0/wct_keyboard_shortcuts/
##############################################################################

{
    'name': "Enable Keyboard Shortcuts",

    'summary': """
        Make your casual work more easier with some useful keyboard shortcuts""",

    'description': """
        This module add some interesting keyboard shortcuts to make casual work more easier.
    """,

    'author': "Islam Abdelmaaboud",
    'website': "http://www.itss-c.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Tools',
    'version': '1.0',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    'data': [
        'keyboard_shortcuts.xml'
    ],
    "images": [
        "images/keyboard_shortcuts.png",
    ],
}
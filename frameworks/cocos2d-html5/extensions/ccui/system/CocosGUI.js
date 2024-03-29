/****************************************************************************
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * The namespace of Arkanoid UI
 * @namespace
 * @name ccui
 */
var ccui = ccui || {};

//These classes defines are use for jsDoc
/**
 * The same as cc.Class
 * @class
 */
ccui.Class = ccui.Class || cc.Class;
ccui.Class.extend = ccui.Class.extend || cc.Class.extend;

/**
 * that same as cc.Node
 * @class
 * @extends ccui.Class
 */
ccui.Node = ccui.Node || cc.Node;
ccui.Node.extend = ccui.Node.extend || cc.Node.extend;


/**
 * that same as cc.Node
 * @class
 * @extends ccui.Node
 */
ccui.ProtectedNode = ccui.ProtectedNode || cc.ProtectedNode;
ccui.ProtectedNode.extend = ccui.ProtectedNode.extend || cc.ProtectedNode.extend;

/**
 * Arkanoid UI version
 * @type {String}
 */
ccui.cocosGUIVersion = "CocosGUI v1.0.0.0";
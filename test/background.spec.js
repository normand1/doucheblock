import OnInstall from '../src/modules/onInstall';
import BrowserAction from '../src/modules/browserAction';
import Tokens from '../src/modules/tokens';
import Tabs from '../src/modules/tabs';
import {OnInstallURL, OptionsPageURL} from '../src/config';

describe('Background script', () => {

    beforeEach(() => {
        chrome.storage.sync.get.yields({count: 0});

        // setup the background context
        new OnInstall();
        new BrowserAction();
        new Tokens();
    });

    afterEach(function () {
        chrome.flush();
        sandbox.restore();
    });

    it('Options page opens on install', done => {
        expect(chrome.tabs.create.notCalled).to.be.true;
        chrome.runtime.onInstalled.dispatch({reason: 'install'});
        expect(chrome.tabs.create.withArgs({url: OnInstallURL}).calledOnce).to.be.true;
        done();
    });

    it('Options page does not open on upgrade', done => {
        expect(chrome.tabs.create.notCalled).to.be.true;
        chrome.runtime.onInstalled.dispatch({reason: 'upgrade'});
        expect(chrome.tabs.create.notCalled).to.be.true;
        done();
    });

    it('Browser actions open options page', done => {
        expect(chrome.tabs.create.notCalled).to.be.true;
        chrome.browserAction.onClicked.dispatch();
        expect(chrome.tabs.create.withArgs({url: OptionsPageURL}).calledOnce).to.be.true;
        done();
    });

    it('Does not display badge when count is 0', done => {
        chrome.storage.sync.get.yields({count: 0});
        expect(chrome.browserAction.setBadgeText.notCalled).to.be.true;
        chrome.runtime.onMessage.dispatch({increment: true});
        expect(chrome.browserAction.setBadgeText.notCalled).to.be.true;
        done();
    });

    it('Requesting increment updates badge to stored count', done => {
        chrome.storage.sync.get.yields({count: 10});
        chrome.runtime.onMessage.dispatch({increment: true});
        expect(chrome.browserAction.setBadgeText.withArgs({text: '10'}).called).to.be.true;
        done();
    });

    it('Converts long numbers to more compact form', done => {
        expect(BrowserAction.formatBadgeCount(1)).to.equal('1');
        expect(BrowserAction.formatBadgeCount(10)).to.equal('10');
        expect(BrowserAction.formatBadgeCount(100)).to.equal('100');
        expect(BrowserAction.formatBadgeCount(9999)).to.equal('9999');
        expect(BrowserAction.formatBadgeCount(1000)).to.equal('1000');
        expect(BrowserAction.formatBadgeCount(10000)).to.equal('10K');
        expect(BrowserAction.formatBadgeCount(100000)).to.equal('100K');
        done();
    });

    it('Notifies tabs of settings update', () => {
        chrome.tabs.query.yields([{id: 1}, {id: 2}]);
        Tabs.notifyTabsOfUpdate();
        expect(chrome.tabs.sendMessage.calledTwice, 'sends message').to.be.true;
    });

});

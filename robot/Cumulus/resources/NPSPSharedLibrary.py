from cumulusci.robotframework.BaseLibrary import BaseLibrary
from cumulusci.robotframework.utils import capture_screenshot_on_error

# core locators
locators = {
    'tabs':{
        'tab': (
            "//div[@class='uiTabBar']"
            "/ul[@class='tabs__nav']"
            "/li[contains(@class,'uiTabItem')]"
            "/a[@class='tabHeader']"
            "/span[contains(text(), '{}')]"
        ),
        'spl-tab': (
            "//div[@class='slds-tabs_default']"
            "//ul[@class='slds-tabs_default__nav']/"
            "li[contains(@class,'slds-tabs_default__item')]"
            "/a[text()= '{}']"
        ),
    },
}

# version-specific patches
_locators = {
    50: {
        'tabs': {
            'tab': "//lightning-tab-bar//li[@data-label='Details']//a"
        }
    }
}


class NPSPSharedLibrary(BaseLibrary):
    def __init__(self):
        self._init_locators(locators, _locators, prefix="npsp")


    @capture_screenshot_on_error
    def select_tab(self, title):
        """Switch between different tabs on a record page

        The only argument is the title of the tab. For example,
        Related, Details, News, etc.

        Example:

        | Select Tab  Related

        """

        for i in locators["tabs"].values():
            locator = i.format(title)
            for button in self.selenium.get_webelements(locator):
                if button.is_displayed():
                    self.salesforce._focus(button)
                    button.click()
                    time.sleep(5)
                    return

        raise Exception(f"tab with the name '{title}' not found")

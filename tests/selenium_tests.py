from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait

class TestCases:

    def ny():
        driver = webdriver.Firefox()
        driver.get('file:///home/zozoobaba/PDXCODE/github_projects/dosage-calc/home.html')

        data = {'inputs':{'weight': '90',
                          'CM':'1000',
                          'CI':'1000',
                          'CE':'1000',
                          'cycle_len':'12',
                          'dose': '275',
                          'time': '11:15'},
               'paths':{'typeXpath':'//input[@value="1"]',
                        'weightXpath':'//input[@name="weight"]',
                        'weighttypeXpath':'//input[@value="kg"]',
                        'cmXpath':'//input[@name="cal-main"]',
                        'ciXpath':'//input[@name="cal-intake"]',
                        'ceXpath':'//input[@name="cal-export"]',
                        'splitdoseID':'split-no',
                        'samedosetimeXpath':'sdtd-yes',
                        'cycle_lenXpath':'//input[@name="cycle-length"]',
                        'cont-btnID':'cont-btn'},

                'fields':{}}

        for path in data['paths']:
            if path == 'splitdoseID' or path == 'cont-btn' or path == 'sdtd-yes':
                data['fields'][path] = WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_id(data['paths'][path]))
            else:
                data['fields'][path] = WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_xpath(data['paths'][path]))

        """
        Data input into field elements
        1. Type
        2. Weight
        3. Calories
        4. Cycle Info
        5. Cycle continue section
        """

        ##########  1  ##########
        data['fields']['typeXpath'].click()
        ##########  2  ##########
        data['fields']['weightXpath'].clear()
        data['fields']['weightXpath'].send_keys(data['inputs']['weight'])
        data['fields']['weighttypeXpath'].click()
        ##########  3  ##########
        data['fields']['cmXpath'].clear()
        data['fields']['cmXpath'].send_keys(data['inputs']['CM'])
        data['fields']['ciXpath'].clear()
        data['fields']['ciXpath'].send_kays(data['inputs']['CI'])
        data['fields']['ceXpath'].clear()
        data['fields']['ceXpath'].send_keys(data['inputs']['CE'])
        ##########  4  ##########
        data['fields']['splitdoseID'].click()
        data['fields']['samedosetimeXpath'].click()
        data['fields']['cycle_lenXpath'].clear()
        data['fields']['cycle_lenXpath'].send_keys(data['inputs']['cycle_len'])
        data['fields']['cont-btnID'].click()
        ##########  5  ##########
        dosefield = WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_xpath('//input[@name="dose"]'))
        timefield = WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_xpath('//input[@name="time"]'))
        submitfield = WebDriverWait(driver, 10).until(lambda driver: driver.find_element_by_id('submit'))
        dosefield.clear()
        dosefield.send_keys(data['inputs']['dose'])
        timefield.clear()
        timefield.send_keys(data['inputs']['time'])
        submitfield.click()


    def yn():
        pass


    def nn():
        pass


def main():
    """
    Allows user to select which test case they would like to test against.
    Easily expandable for as many test cases as needed

    TODO: create classes for each case for multiple tests per case
    """
    functions = [(TestCases.ny(), 'No Yes Case'), (TestCases.yn(), 'Yes No Case'), (TestCases.nn(),  'No No Case')]

    for index, func in enumerate(functions):
        print('{}: {}'.format(index, func[1]))

    func_to_run = int(input('Choose which case to test:  '))

    functions[func_to_run][0]

main()

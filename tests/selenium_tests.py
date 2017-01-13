from selenium import webdriver as wd
from selenium.webdriver.support.ui import WebDriverWait


def ny():
    driver = webdriver.Firefox()
    driver.get('file:///home/zozoobaba/PDXCODE/github_projects/dosage-calc/home.html')

    {inputs:{},
     fields:{}}

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
    functions = [(ny(), 'No Yes Case'), (yn(), 'Yes No Case'), (nn(),  'No No Case')]

    for index, func in enumerate(functions):
        print('{}: {}'.format(index, func[1]))

    func_to_run = int(input('Choose which case to test:  '))

    functions[func_to_run][0]

main()

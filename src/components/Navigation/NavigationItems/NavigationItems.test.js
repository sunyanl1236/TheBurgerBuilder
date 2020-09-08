import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;
    /*
    beforeEach() takes a function as an argument which will get executed before each test
    */
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />); 
    });

    it('should render two <NavigationItem /> elements if not authenticated', () => {
       
       expect(wrapper.find(NavigationItem)).toHaveLength(2); 
    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />); //method 1
        wrapper.setProps({isAuthenticated: true}); //method 2, take js object as argument
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should an exact logout button', () => {
        wrapper.setProps({isAuthenticated: true});  //each it() test runs independently from each other, so need to set props again
        //test if we have Logout when isAuthenticated is true
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});
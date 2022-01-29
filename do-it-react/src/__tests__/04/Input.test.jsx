import React from 'tutorial/react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Input from '../../03/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Input name="name" />, div);
    // ReactDOM.unmountComponentAtNode(div);
    // expect(React.isValidElement(<Input name="test_name" />)).toBeTruthy();
    expect(() => {
      shallow(<Input Input name="test_name" />);
    }).not.toThrow();
  });
  it('has one element', () => {
    const wrapper = shallow(<Input Input name="test_name" />);
    expect(wrapper.length).toEqual(1);
    expect(wrapper).toHaveLength(1);
  });

  describe('contains <input>', () => {
    it('renders one input', () => {
      // shallow 함수는 컴포넌트 검사 객체 enzyme를 반환, enzyme는 find() 함수를 포함하고있음
      const wrapper = shallow(<Input name="test_name" />);

      //find 함수의 인자로 input을 전달하여 출력된 DOM에서 input 엘리먼트를 찾음.
      //toHaveLength 함수로 expert 함수에서 반환된 엘리먼트 개수(배열의 길이) 검증
      expect(wrapper.find('input')).toHaveLength(1);
      expect(wrapper.find('label')).toHaveLength(1);
    });
  });

  it('assigns the porp value and type', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
    //prop() 함수로 value의 프로퍼티값과 컴포넌트에 전달된 값을 검증
    expect(wrapper.find('input').prop('value')).toBe(expectedValue);

    //객체 추출식을 통해 필요한 프로퍼티 항목을 추출함
    const { type, value } = wrapper.find('input').props();
    //props 함수에서 추출한 value, type의 프로퍼티 값을 검증, 위에서 먼저 추출한 값과 같지만 표현법이 다름
    expect(value).toBe(expectedValue);
    expect(type).toBe('text');
  });

  it('renders errorMessage', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('.error')).toHaveLength(0);
    const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
    wrapper.setProps({ errorMessage: expectedErrorMessage });
    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1);
    expect(wrapper.html()).toContain(expectedErrorMessage);
  });

  it('calls back onChange on input change', () => {
    const changeStub = jest.fn();
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
    expect(changeStub).not.toHaveBeenCalled();
    const expoectedTargetValue = 'updated input';
    wrapper.find('input').simulate('change', { target: { value: expoectedTargetValue } });
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('test_name', expoectedTargetValue);
  });
});

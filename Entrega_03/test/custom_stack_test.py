import pytest
from src.custom_stack_class import CustomStack, StackEmptyException, StackFullException

def test_push_one_element_in_stack():
    element_value = 5.0
    cut = CustomStack(5)
    cut.push(element_value)
    
    assert cut.is_empty() == False
    assert element_value == cut.top()
    assert 1 == cut.size()

def test_push_stack_full_exception():
    cut = CustomStack(2)
    cut.push(1.0)
    cut.push(2.0)
    
    with pytest.raises(StackFullException):
        cut.push(3.0)

def test_pop_element():
    cut = CustomStack(3)
    cut.push(10)
    cut.push(20)
    
    popped = cut.pop()
    assert popped == 20
    assert cut.size() == 1

def test_pop_stack_empty_exception():
    cut = CustomStack(5)
    
    with pytest.raises(StackEmptyException):
        cut.pop()

def test_top_stack_empty_exception():
    cut = CustomStack(5)
    
    with pytest.raises(StackEmptyException):
        cut.top()
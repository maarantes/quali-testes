from src.custom_stack_class import CustomStack
from src.number_asc_order import NumberAscOrder

def test_sort_with_six_random_numbers():
    stack = CustomStack(6)
    
    drawn_numbers = [45, 3, 21, 58, 12, 33]
    for num in drawn_numbers:
        stack.push(num)
        
    sorter = NumberAscOrder()
    result = sorter.sort(stack)
    
    expected = [3, 12, 21, 33, 45, 58]
    assert result == expected
    assert stack.is_empty() == True

def test_sort_with_empty_stack():
    stack = CustomStack(6)
    
    sorter = NumberAscOrder()
    result = sorter.sort(stack)
    
    assert result == []
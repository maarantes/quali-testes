from src.custom_stack_class import CustomStack

class NumberAscOrder:
    
    def sort(self, stack: CustomStack) -> list:
        numbers = []
        
        while not stack.is_empty():
            numbers.append(stack.pop())
            
        numbers.sort()
        
        return numbers
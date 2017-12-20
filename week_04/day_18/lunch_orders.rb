require 'pry'

def prompt (*args)
  print *args
  gets.strip
end

def ask_for_order
  order_list = {}
  is_finish = false

  while !is_finish
    name_for_order = prompt("Name for order: ").to_sym
    wants_to_order = prompt("#{name_for_order} wants to order: ")

    if order_list.key?(name_for_order)
      order_list[name_for_order].push(wants_to_order)
    else
      order_list[name_for_order] = [wants_to_order]
    end

    # binding.pry

    continue = prompt("Add another item to the order? (y/n) ")
    if continue == "y"
      is_finish = false
    else
      is_finish = true
    end
  end

  order_list

end

orders = ask_for_order
puts "All orders: #{orders}"

def print_out_order (orders)
  # "Travis ordered a salad, apple & water"

  orders.each do |name, order|
    order_str = order.join(', ').sub(/(.*)\b, \b/i, '\1 & ')
    puts "#{name} ordered a #{order_str}"
  end
end

print_out_order(orders)

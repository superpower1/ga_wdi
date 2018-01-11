class School
  def initialize(name)
    @db = {}
    @name = name
  end

  def add(name, grade)
    if @db[grade]
      @db[grade].push(name)
    else
      @db[grade] = [name]
    end
  end

  def grade(num)
    @db[num]
  end

  def db
    @db
  end

  def sort
    sorted_db = @db.sort.to_h
    sorted_db.each do |grade, students|
      sorted_db[grade] = students.sort
    end
    sorted_db
  end
end

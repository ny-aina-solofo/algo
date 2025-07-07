"""
    Given a time in 12hour AM/PM format, convert it to military (24-hour) time.

    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
        - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. 
"""

def timeConversion(my_string):
    
    time_12_clock =  my_string.split(":")
    hour_12_clock = time_12_clock[0]
    minutes_12_clock = time_12_clock[1]
    
    military_hour = 0

    if "PM" in my_string : 
    
        
        secondes_12_clock = time_12_clock[2].replace("PM","")  
        
        # For times between 1:00 PM to 11:59 PM, add 12 hours:
        if hour_12_clock == "12" :
            military_hour = int(time_12_clock[0])
        else :     
            military_hour = abs(int(hour_12_clock) + 12)
        
        military_time = f"{military_hour:02d}" + ":" + minutes_12_clock + ":" + secondes_12_clock
    
    elif "AM" in my_string :
        
        secondes_12_clock = time_12_clock[2].replace("AM","") 

        # Starting from the first hour of the day (12:00 AM or midnight to 12:59 AM), subtract 12 hours:
        if hour_12_clock == "12" :  
            military_hour = abs(int(hour_12_clock) - 12)
        else : 
            military_hour = int(time_12_clock[0])

        military_time = f"{military_hour:02d}" + ":" + minutes_12_clock + ":" + secondes_12_clock
    

    return military_time

print(timeConversion("12:45:54PM"))
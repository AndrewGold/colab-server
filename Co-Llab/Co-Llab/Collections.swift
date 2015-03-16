//
//  Collections.swift
//  Co-Llab
//
//  Created by Matthew Fishkin on 3/15/15.
//  Copyright (c) 2015 Fishkin. All rights reserved.
//

import UIKit

class Collections: NSObject {
    var users:[User] = []
    
    override init() {
        
        let usr1 = User(name: "Matthew Fishkin", tagLine: "Good at math", score: "84", skill1: "geometry", skill2: "algebra", skill3: "calculus")
        let usr2 = User(name: "Andrew Gold", tagLine: "Good at computer science", score: "92", skill1: "c++", skill2: "iOS", skill3: "java")
        let usr3 = User(name: "Navneet Reddy", tagLine: "Musical genius", score: "96", skill1: "piano", skill2: "guitar", skill3: "violin")
        users.append(usr1)
        users.append(usr2)
        users.append(usr3)
    }
}

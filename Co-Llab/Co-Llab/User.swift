//
//  User.swift
//  Co-Llab
//
//  Created by Matthew Fishkin on 3/15/15.
//  Copyright (c) 2015 Fishkin. All rights reserved.
//

import UIKit

class User: NSObject {
    var _name:String!
    var _tagLine:String!
    var _score:String!
    
    var _skill1:String!
    var _skill2:String!
    var _skill3:String!
    
    
    init(name:String!, tagLine:String!, score:String!, skill1:String!, skill2:String!, skill3:String!) {
        _name = name
        _tagLine = tagLine
        _score = score
        
        _skill1 = skill1
        _skill2 = skill2
        _skill3 = skill3
    }
}

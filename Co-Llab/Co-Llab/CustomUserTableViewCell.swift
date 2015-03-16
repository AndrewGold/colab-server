//
//  CustomUserTableViewCell.swift
//  Co-Llab
//
//  Created by Matthew Fishkin on 3/15/15.
//  Copyright (c) 2015 Fishkin. All rights reserved.
//

import UIKit

class CustomUserTableViewCell: UITableViewCell {

    @IBOutlet weak var _userImage: UIImageView!
    @IBOutlet weak var _userName: UILabel!
    @IBOutlet weak var _userTagline: UILabel!
    @IBOutlet weak var _userScore: UILabel!
    
    @IBOutlet weak var _userSkill1: UILabel!
    @IBOutlet weak var _userSkill2: UILabel!
    @IBOutlet weak var _userSkill3: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
        
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
        
    }
    
    func setUpCell(image:String!, name:String!, tagLine:String!, score:String!, skill1:String!, skill2:String!, skill3:String!)
    {
        _userImage.image = UIImage(named: image)
        _userName.text = name
        _userTagline.text = tagLine
        _userScore.text = score
        
        _userSkill1.text = skill1
        _userSkill2.text = skill2
        _userSkill3.text = skill3
    }

}

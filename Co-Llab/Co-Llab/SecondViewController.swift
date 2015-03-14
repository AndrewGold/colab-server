//
//  SecondViewController.swift
//  Co-Llab
//
//  Created by Matthew Fishkin on 3/14/15.
//  Copyright (c) 2015 Fishkin. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController {

    @IBOutlet weak var _signUpUserPassword: UITextField!
    @IBOutlet weak var _signUpUserEmail: UITextField!
    
    
    let signUpCont = SignUpController();
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func signUpUser(sender: AnyObject) {
        signUpCont.signUpUser(_signUpUserEmail.text, password: _signUpUserPassword.text);
    }

}


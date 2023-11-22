﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace dotnetapp.Models
{
    public class Player {
        [Key]
        public int Id{get;set;}
        [Required(ErrorMessage="Name is required.")]
        public string Name{get;set;}
        public int Age{get;set;}
        public string Category{get;set;}
        [Required]
        [Range(1,Int32.MaxValue,ErrorMessage="Bidding amount must be greater than 0.")]
        public decimal BiddingPrice{get;set;}
        [ForeignKey("Team")]
        public int TeamId{get;set;}
        public Team ?Team{get;set;}
    }
}
export type MarinadeFinance = {
  "address": "MarBmsSgKXdrN1egZf5sqe1TMai9K1rChYNDJgjq7aD",
  "metadata": {
    "name": "marinade_finance",
    "version": "0.1.0",
    "spec": "0.1.0"
  },
  "instructions": [
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "reservePda"
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "msolMint"
        },
        {
          "name": "operationalSolAccount"
        },
        {
          "name": "liqPool",
          "accounts": [
            {
              "name": "lpMint"
            },
            {
              "name": "solLegPda"
            },
            {
              "name": "msolLeg"
            }
          ]
        },
        {
          "name": "treasuryMsolAccount"
        },
        {
          "name": "clock"
        },
        {
          "name": "rent"
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": {
              "name": "initializeData"
            }
          }
        }
      ]
    },
    {
      "name": "changeAuthority",
      "discriminator": [
        50,
        106,
        66,
        104,
        99,
        118,
        145,
        88
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "adminAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "data",
          "type": {
            "defined": {
              "name": "changeAuthorityData"
            }
          }
        }
      ]
    },
    {
      "name": "addValidator",
      "discriminator": [
        250,
        113,
        53,
        54,
        141,
        117,
        215,
        185
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "managerAuthority",
          "signer": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "validatorVote"
        },
        {
          "name": "duplicationFlag",
          "docs": [
            "by initializing this account we mark the validator as added"
          ],
          "writable": true
        },
        {
          "name": "rentPayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "clock"
        },
        {
          "name": "rent"
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "score",
          "type": "u32"
        }
      ]
    },
    {
      "name": "removeValidator",
      "discriminator": [
        25,
        96,
        211,
        155,
        161,
        14,
        168,
        188
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "managerAuthority",
          "signer": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "duplicationFlag",
          "writable": true
        },
        {
          "name": "operationalSolAccount",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "validatorVote",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "setValidatorScore",
      "discriminator": [
        101,
        41,
        206,
        33,
        216,
        111,
        25,
        78
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "managerAuthority",
          "signer": true
        },
        {
          "name": "validatorList",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "index",
          "type": "u32"
        },
        {
          "name": "validatorVote",
          "type": "pubkey"
        },
        {
          "name": "score",
          "type": "u32"
        }
      ]
    },
    {
      "name": "configValidatorSystem",
      "discriminator": [
        27,
        90,
        97,
        209,
        17,
        115,
        7,
        40
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "managerAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "extraRuns",
          "type": "u32"
        }
      ]
    },
    {
      "name": "deposit",
      "discriminator": [
        242,
        35,
        198,
        137,
        82,
        225,
        242,
        182
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "msolMint",
          "writable": true
        },
        {
          "name": "liqPoolSolLegPda",
          "writable": true
        },
        {
          "name": "liqPoolMsolLeg",
          "writable": true
        },
        {
          "name": "liqPoolMsolLegAuthority"
        },
        {
          "name": "reservePda",
          "writable": true
        },
        {
          "name": "transferFrom",
          "writable": true,
          "signer": true
        },
        {
          "name": "mintTo",
          "docs": [
            "user mSOL Token account to send the mSOL"
          ],
          "writable": true
        },
        {
          "name": "msolMintAuthority"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositStakeAccount",
      "discriminator": [
        110,
        130,
        115,
        41,
        164,
        102,
        2,
        59
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "stakeAccount",
          "writable": true
        },
        {
          "name": "stakeAuthority",
          "signer": true
        },
        {
          "name": "duplicationFlag",
          "writable": true
        },
        {
          "name": "rentPayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "msolMint",
          "writable": true
        },
        {
          "name": "mintTo",
          "docs": [
            "user mSOL Token account to send the mSOL"
          ],
          "writable": true
        },
        {
          "name": "msolMintAuthority"
        },
        {
          "name": "clock"
        },
        {
          "name": "rent"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "stakeProgram"
        }
      ],
      "args": [
        {
          "name": "validatorIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "liquidUnstake",
      "discriminator": [
        30,
        30,
        119,
        240,
        191,
        227,
        12,
        16
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "msolMint",
          "writable": true
        },
        {
          "name": "liqPoolSolLegPda",
          "writable": true
        },
        {
          "name": "liqPoolMsolLeg",
          "writable": true
        },
        {
          "name": "treasuryMsolAccount",
          "writable": true
        },
        {
          "name": "getMsolFrom",
          "writable": true
        },
        {
          "name": "getMsolFromAuthority",
          "signer": true
        },
        {
          "name": "transferSolTo",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "msolAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addLiquidity",
      "discriminator": [
        181,
        157,
        89,
        67,
        143,
        182,
        52,
        72
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "lpMint",
          "writable": true
        },
        {
          "name": "lpMintAuthority"
        },
        {
          "name": "liqPoolMsolLeg"
        },
        {
          "name": "liqPoolSolLegPda",
          "writable": true
        },
        {
          "name": "transferFrom",
          "writable": true,
          "signer": true
        },
        {
          "name": "mintTo",
          "writable": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "lamports",
          "type": "u64"
        }
      ]
    },
    {
      "name": "removeLiquidity",
      "discriminator": [
        80,
        85,
        209,
        72,
        24,
        206,
        177,
        108
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "lpMint",
          "writable": true
        },
        {
          "name": "burnFrom",
          "writable": true
        },
        {
          "name": "burnFromAuthority",
          "signer": true
        },
        {
          "name": "transferSolTo",
          "writable": true
        },
        {
          "name": "transferMsolTo",
          "writable": true
        },
        {
          "name": "liqPoolSolLegPda",
          "writable": true
        },
        {
          "name": "liqPoolMsolLeg",
          "writable": true
        },
        {
          "name": "liqPoolMsolLegAuthority"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "tokens",
          "type": "u64"
        }
      ]
    },
    {
      "name": "configLp",
      "discriminator": [
        10,
        24,
        168,
        119,
        86,
        48,
        225,
        17
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "adminAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "configLpParams"
            }
          }
        }
      ]
    },
    {
      "name": "configMarinade",
      "discriminator": [
        67,
        3,
        34,
        114,
        190,
        185,
        17,
        62
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "adminAuthority",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": {
              "name": "configMarinadeParams"
            }
          }
        }
      ]
    },
    {
      "name": "orderUnstake",
      "discriminator": [
        97,
        167,
        144,
        107,
        117,
        190,
        128,
        36
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "msolMint",
          "writable": true
        },
        {
          "name": "burnMsolFrom",
          "writable": true
        },
        {
          "name": "burnMsolAuthority",
          "signer": true
        },
        {
          "name": "newTicketAccount",
          "writable": true
        },
        {
          "name": "clock"
        },
        {
          "name": "rent"
        },
        {
          "name": "tokenProgram"
        }
      ],
      "args": [
        {
          "name": "msolAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claim",
      "discriminator": [
        62,
        198,
        214,
        193,
        213,
        159,
        108,
        210
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "reservePda",
          "writable": true
        },
        {
          "name": "ticketAccount",
          "writable": true
        },
        {
          "name": "transferSolTo",
          "writable": true
        },
        {
          "name": "clock"
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": []
    },
    {
      "name": "stakeReserve",
      "discriminator": [
        87,
        217,
        23,
        179,
        205,
        25,
        113,
        129
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "validatorVote",
          "writable": true
        },
        {
          "name": "reservePda",
          "writable": true
        },
        {
          "name": "stakeAccount",
          "writable": true,
          "signer": true
        },
        {
          "name": "stakeDepositAuthority"
        },
        {
          "name": "rentPayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "clock"
        },
        {
          "name": "epochSchedule"
        },
        {
          "name": "rent"
        },
        {
          "name": "stakeHistory"
        },
        {
          "name": "stakeConfig"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "stakeProgram"
        }
      ],
      "args": [
        {
          "name": "validatorIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "updateActive",
      "discriminator": [
        4,
        67,
        81,
        64,
        136,
        245,
        93,
        152
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "state",
              "writable": true
            },
            {
              "name": "stakeList",
              "writable": true
            },
            {
              "name": "stakeAccount",
              "writable": true
            },
            {
              "name": "stakeWithdrawAuthority"
            },
            {
              "name": "reservePda",
              "writable": true
            },
            {
              "name": "msolMint",
              "writable": true
            },
            {
              "name": "msolMintAuthority"
            },
            {
              "name": "treasuryMsolAccount",
              "writable": true
            },
            {
              "name": "clock"
            },
            {
              "name": "stakeHistory"
            },
            {
              "name": "stakeProgram"
            },
            {
              "name": "tokenProgram"
            }
          ]
        },
        {
          "name": "validatorList",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "stakeIndex",
          "type": "u32"
        },
        {
          "name": "validatorIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "updateDeactivated",
      "discriminator": [
        16,
        232,
        131,
        115,
        156,
        100,
        239,
        50
      ],
      "accounts": [
        {
          "name": "common",
          "accounts": [
            {
              "name": "state",
              "writable": true
            },
            {
              "name": "stakeList",
              "writable": true
            },
            {
              "name": "stakeAccount",
              "writable": true
            },
            {
              "name": "stakeWithdrawAuthority"
            },
            {
              "name": "reservePda",
              "writable": true
            },
            {
              "name": "msolMint",
              "writable": true
            },
            {
              "name": "msolMintAuthority"
            },
            {
              "name": "treasuryMsolAccount",
              "writable": true
            },
            {
              "name": "clock"
            },
            {
              "name": "stakeHistory"
            },
            {
              "name": "stakeProgram"
            },
            {
              "name": "tokenProgram"
            }
          ]
        },
        {
          "name": "operationalSolAccount",
          "writable": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "stakeIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "deactivateStake",
      "discriminator": [
        165,
        158,
        229,
        97,
        168,
        220,
        187,
        225
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "reservePda"
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "stakeAccount",
          "writable": true
        },
        {
          "name": "stakeDepositAuthority"
        },
        {
          "name": "splitStakeAccount",
          "writable": true,
          "signer": true
        },
        {
          "name": "splitStakeRentPayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "clock"
        },
        {
          "name": "rent"
        },
        {
          "name": "epochSchedule"
        },
        {
          "name": "stakeHistory"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "stakeProgram"
        }
      ],
      "args": [
        {
          "name": "stakeIndex",
          "type": "u32"
        },
        {
          "name": "validatorIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "emergencyUnstake",
      "discriminator": [
        123,
        69,
        168,
        195,
        183,
        213,
        199,
        214
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "validatorManagerAuthority",
          "signer": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "stakeAccount",
          "writable": true
        },
        {
          "name": "stakeDepositAuthority"
        },
        {
          "name": "clock"
        },
        {
          "name": "stakeProgram"
        }
      ],
      "args": [
        {
          "name": "stakeIndex",
          "type": "u32"
        },
        {
          "name": "validatorIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "partialUnstake",
      "discriminator": [
        55,
        241,
        205,
        221,
        45,
        114,
        205,
        163
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "validatorManagerAuthority",
          "signer": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "stakeAccount",
          "writable": true
        },
        {
          "name": "stakeDepositAuthority"
        },
        {
          "name": "reservePda"
        },
        {
          "name": "splitStakeAccount",
          "writable": true,
          "signer": true
        },
        {
          "name": "splitStakeRentPayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "clock"
        },
        {
          "name": "rent"
        },
        {
          "name": "stakeHistory"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "stakeProgram"
        }
      ],
      "args": [
        {
          "name": "stakeIndex",
          "type": "u32"
        },
        {
          "name": "validatorIndex",
          "type": "u32"
        },
        {
          "name": "desiredUnstakeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mergeStakes",
      "discriminator": [
        216,
        36,
        141,
        225,
        243,
        78,
        125,
        237
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "destinationStake",
          "writable": true
        },
        {
          "name": "sourceStake",
          "writable": true
        },
        {
          "name": "stakeDepositAuthority"
        },
        {
          "name": "stakeWithdrawAuthority"
        },
        {
          "name": "operationalSolAccount",
          "writable": true
        },
        {
          "name": "clock"
        },
        {
          "name": "stakeHistory"
        },
        {
          "name": "stakeProgram"
        }
      ],
      "args": [
        {
          "name": "destinationStakeIndex",
          "type": "u32"
        },
        {
          "name": "sourceStakeIndex",
          "type": "u32"
        },
        {
          "name": "validatorIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "redelegate",
      "discriminator": [
        212,
        82,
        51,
        160,
        228,
        80,
        116,
        35
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "stakeAccount",
          "writable": true
        },
        {
          "name": "stakeDepositAuthority"
        },
        {
          "name": "reservePda"
        },
        {
          "name": "splitStakeAccount",
          "writable": true,
          "signer": true
        },
        {
          "name": "splitStakeRentPayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "destValidatorAccount"
        },
        {
          "name": "redelegateStakeAccount",
          "writable": true,
          "signer": true
        },
        {
          "name": "clock"
        },
        {
          "name": "stakeHistory"
        },
        {
          "name": "stakeConfig"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "stakeProgram"
        }
      ],
      "args": [
        {
          "name": "stakeIndex",
          "type": "u32"
        },
        {
          "name": "sourceValidatorIndex",
          "type": "u32"
        },
        {
          "name": "destValidatorIndex",
          "type": "u32"
        }
      ]
    },
    {
      "name": "pause",
      "discriminator": [
        211,
        22,
        221,
        251,
        74,
        121,
        193,
        47
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "pauseAuthority",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "resume",
      "discriminator": [
        1,
        166,
        51,
        170,
        127,
        32,
        141,
        206
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "pauseAuthority",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "withdrawStakeAccount",
      "discriminator": [
        211,
        85,
        184,
        65,
        183,
        177,
        233,
        217
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "msolMint",
          "writable": true
        },
        {
          "name": "burnMsolFrom",
          "writable": true
        },
        {
          "name": "burnMsolAuthority",
          "writable": true,
          "signer": true
        },
        {
          "name": "treasuryMsolAccount",
          "writable": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "stakeWithdrawAuthority"
        },
        {
          "name": "stakeDepositAuthority"
        },
        {
          "name": "stakeAccount",
          "writable": true
        },
        {
          "name": "splitStakeAccount",
          "writable": true,
          "signer": true
        },
        {
          "name": "splitStakeRentPayer",
          "writable": true,
          "signer": true
        },
        {
          "name": "clock"
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram"
        },
        {
          "name": "stakeProgram"
        }
      ],
      "args": [
        {
          "name": "stakeIndex",
          "type": "u32"
        },
        {
          "name": "validatorIndex",
          "type": "u32"
        },
        {
          "name": "msolAmount",
          "type": "u64"
        },
        {
          "name": "beneficiary",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "reallocValidatorList",
      "discriminator": [
        215,
        59,
        218,
        133,
        93,
        138,
        60,
        123
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "adminAuthority",
          "signer": true
        },
        {
          "name": "validatorList",
          "writable": true
        },
        {
          "name": "rentFunds",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "capacity",
          "type": "u32"
        }
      ]
    },
    {
      "name": "reallocStakeList",
      "discriminator": [
        12,
        36,
        124,
        27,
        128,
        96,
        85,
        199
      ],
      "accounts": [
        {
          "name": "state",
          "writable": true
        },
        {
          "name": "adminAuthority",
          "signer": true
        },
        {
          "name": "stakeList",
          "writable": true
        },
        {
          "name": "rentFunds",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        }
      ],
      "args": [
        {
          "name": "capacity",
          "type": "u32"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "ticketAccountData",
      "discriminator": [
        133,
        77,
        18,
        98,
        211,
        1,
        231,
        3
      ]
    },
    {
      "name": "state",
      "discriminator": [
        216,
        146,
        107,
        94,
        104,
        75,
        182,
        177
      ]
    }
  ],
  "events": [
    {
      "name": "changeAuthorityEvent",
      "discriminator": [
        228,
        111,
        35,
        24,
        187,
        78,
        224,
        138
      ]
    },
    {
      "name": "configLpEvent",
      "discriminator": [
        159,
        204,
        192,
        138,
        68,
        145,
        224,
        148
      ]
    },
    {
      "name": "configMarinadeEvent",
      "discriminator": [
        159,
        164,
        245,
        114,
        94,
        253,
        3,
        9
      ]
    },
    {
      "name": "initializeEvent",
      "discriminator": [
        206,
        175,
        169,
        208,
        241,
        210,
        35,
        221
      ]
    },
    {
      "name": "emergencyPauseEvent",
      "discriminator": [
        159,
        241,
        192,
        232,
        29,
        208,
        51,
        21
      ]
    },
    {
      "name": "resumeEvent",
      "discriminator": [
        97,
        117,
        183,
        115,
        117,
        224,
        8,
        229
      ]
    },
    {
      "name": "reallocValidatorListEvent",
      "discriminator": [
        70,
        191,
        242,
        164,
        56,
        156,
        130,
        13
      ]
    },
    {
      "name": "reallocStakeListEvent",
      "discriminator": [
        193,
        129,
        16,
        243,
        177,
        131,
        248,
        23
      ]
    },
    {
      "name": "deactivateStakeEvent",
      "discriminator": [
        2,
        54,
        184,
        218,
        78,
        181,
        163,
        117
      ]
    },
    {
      "name": "mergeStakesEvent",
      "discriminator": [
        73,
        156,
        69,
        233,
        32,
        14,
        150,
        65
      ]
    },
    {
      "name": "redelegateEvent",
      "discriminator": [
        241,
        75,
        135,
        173,
        204,
        215,
        72,
        67
      ]
    },
    {
      "name": "stakeReserveEvent",
      "discriminator": [
        112,
        117,
        149,
        185,
        77,
        119,
        190,
        106
      ]
    },
    {
      "name": "updateActiveEvent",
      "discriminator": [
        251,
        18,
        128,
        75,
        208,
        80,
        174,
        140
      ]
    },
    {
      "name": "updateDeactivatedEvent",
      "discriminator": [
        252,
        159,
        177,
        147,
        182,
        113,
        186,
        94
      ]
    },
    {
      "name": "claimEvent",
      "discriminator": [
        93,
        15,
        70,
        170,
        48,
        140,
        212,
        219
      ]
    },
    {
      "name": "orderUnstakeEvent",
      "discriminator": [
        228,
        63,
        155,
        249,
        132,
        160,
        135,
        113
      ]
    },
    {
      "name": "addLiquidityEvent",
      "discriminator": [
        27,
        178,
        153,
        186,
        47,
        196,
        140,
        45
      ]
    },
    {
      "name": "liquidUnstakeEvent",
      "discriminator": [
        173,
        5,
        147,
        15,
        5,
        14,
        194,
        116
      ]
    },
    {
      "name": "removeLiquidityEvent",
      "discriminator": [
        141,
        199,
        182,
        123,
        159,
        94,
        215,
        102
      ]
    },
    {
      "name": "addValidatorEvent",
      "discriminator": [
        190,
        231,
        170,
        244,
        14,
        227,
        129,
        66
      ]
    },
    {
      "name": "removeValidatorEvent",
      "discriminator": [
        67,
        164,
        190,
        192,
        156,
        156,
        168,
        210
      ]
    },
    {
      "name": "setValidatorScoreEvent",
      "discriminator": [
        58,
        53,
        237,
        178,
        238,
        153,
        85,
        156
      ]
    },
    {
      "name": "depositStakeAccountEvent",
      "discriminator": [
        231,
        203,
        118,
        96,
        75,
        116,
        70,
        228
      ]
    },
    {
      "name": "depositEvent",
      "discriminator": [
        120,
        248,
        61,
        83,
        31,
        142,
        107,
        144
      ]
    },
    {
      "name": "withdrawStakeAccountEvent",
      "discriminator": [
        131,
        238,
        39,
        48,
        30,
        27,
        165,
        28
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "wrongReserveOwner",
      "msg": "Wrong reserve owner. Must be a system account"
    },
    {
      "code": 6001,
      "name": "nonEmptyReserveData",
      "msg": "Reserve must have no data, but has data"
    },
    {
      "code": 6002,
      "name": "invalidInitialReserveLamports",
      "msg": "Invalid initial reserve lamports"
    },
    {
      "code": 6003,
      "name": "zeroValidatorChunkSize",
      "msg": "Zero validator chunk size"
    },
    {
      "code": 6004,
      "name": "tooBigValidatorChunkSize",
      "msg": "Too big validator chunk size"
    },
    {
      "code": 6005,
      "name": "zeroCreditChunkSize",
      "msg": "Zero credit chunk size"
    },
    {
      "code": 6006,
      "name": "tooBigCreditChunkSize",
      "msg": "Too big credit chunk size"
    },
    {
      "code": 6007,
      "name": "tooLowCreditFee",
      "msg": "Too low credit fee"
    },
    {
      "code": 6008,
      "name": "invalidMintAuthority",
      "msg": "Invalid mint authority"
    },
    {
      "code": 6009,
      "name": "mintHasInitialSupply",
      "msg": "Non empty initial mint supply"
    },
    {
      "code": 6010,
      "name": "invalidOwnerFeeState",
      "msg": "Invalid owner fee state"
    },
    {
      "code": 6011,
      "name": "invalidProgramId",
      "msg": "Invalid program id. For using program from another account please update id in the code"
    },
    {
      "code": 6012,
      "name": "unexpectedAccount",
      "msg": "Unexpected account"
    },
    {
      "code": 6013,
      "name": "calculationFailure",
      "msg": "Calculation failure"
    },
    {
      "code": 6014,
      "name": "stakeAccountWithLockup",
      "msg": "You can't deposit a stake-account with lockup"
    },
    {
      "code": 6015,
      "name": "minStakeIsTooLow",
      "msg": "Min stake is too low"
    },
    {
      "code": 6016,
      "name": "lpMaxFeeIsTooHigh",
      "msg": "Lp max fee is too high"
    },
    {
      "code": 6017,
      "name": "basisPointsOverflow",
      "msg": "Basis points overflow"
    },
    {
      "code": 6018,
      "name": "lpFeesAreWrongWayRound",
      "msg": "LP min fee > LP max fee"
    },
    {
      "code": 6019,
      "name": "liquidityTargetTooLow",
      "msg": "Liquidity target too low"
    },
    {
      "code": 6020,
      "name": "ticketNotDue",
      "msg": "Ticket not due. Wait more epochs"
    },
    {
      "code": 6021,
      "name": "ticketNotReady",
      "msg": "Ticket not ready. Wait a few hours and try again"
    },
    {
      "code": 6022,
      "name": "wrongBeneficiary",
      "msg": "Wrong Ticket Beneficiary"
    },
    {
      "code": 6023,
      "name": "stakeAccountNotUpdatedYet",
      "msg": "Stake Account not updated yet"
    },
    {
      "code": 6024,
      "name": "stakeNotDelegated",
      "msg": "Stake Account not delegated"
    },
    {
      "code": 6025,
      "name": "stakeAccountIsEmergencyUnstaking",
      "msg": "Stake Account is emergency unstaking"
    },
    {
      "code": 6026,
      "name": "insufficientLiquidity",
      "msg": "Insufficient Liquidity in the Liquidity Pool"
    },
    {
      "code": 6027,
      "name": "notUsed6027"
    },
    {
      "code": 6028,
      "name": "invalidAdminAuthority",
      "msg": "Invalid admin authority"
    },
    {
      "code": 6029,
      "name": "invalidValidatorManager",
      "msg": "Invalid validator system manager"
    },
    {
      "code": 6030,
      "name": "invalidStakeListDiscriminator",
      "msg": "Invalid stake list account discriminator"
    },
    {
      "code": 6031,
      "name": "invalidValidatorListDiscriminator",
      "msg": "Invalid validator list account discriminator"
    },
    {
      "code": 6032,
      "name": "treasuryCutIsTooHigh",
      "msg": "Treasury cut is too high"
    },
    {
      "code": 6033,
      "name": "rewardsFeeIsTooHigh",
      "msg": "Reward fee is too high"
    },
    {
      "code": 6034,
      "name": "stakingIsCapped",
      "msg": "Staking is capped"
    },
    {
      "code": 6035,
      "name": "liquidityIsCapped",
      "msg": "Liquidity is capped"
    },
    {
      "code": 6036,
      "name": "updateWindowIsTooLow",
      "msg": "Update window is too low"
    },
    {
      "code": 6037,
      "name": "minWithdrawIsTooHigh",
      "msg": "Min withdraw is too high"
    },
    {
      "code": 6038,
      "name": "withdrawAmountIsTooLow",
      "msg": "Withdraw amount is too low"
    },
    {
      "code": 6039,
      "name": "depositAmountIsTooLow",
      "msg": "Deposit amount is too low"
    },
    {
      "code": 6040,
      "name": "notEnoughUserFunds",
      "msg": "Not enough user funds"
    },
    {
      "code": 6041,
      "name": "wrongTokenOwnerOrDelegate",
      "msg": "Wrong token owner or delegate"
    },
    {
      "code": 6042,
      "name": "tooEarlyForStakeDelta",
      "msg": "Too early for stake delta"
    },
    {
      "code": 6043,
      "name": "requiredDelegatedStake",
      "msg": "Required delegated stake"
    },
    {
      "code": 6044,
      "name": "requiredActiveStake",
      "msg": "Required active stake"
    },
    {
      "code": 6045,
      "name": "requiredDeactivatingStake",
      "msg": "Required deactivating stake"
    },
    {
      "code": 6046,
      "name": "depositingNotActivatedStake",
      "msg": "Depositing not activated stake"
    },
    {
      "code": 6047,
      "name": "tooLowDelegationInDepositingStake",
      "msg": "Too low delegation in the depositing stake"
    },
    {
      "code": 6048,
      "name": "wrongStakeBalance",
      "msg": "Wrong deposited stake balance"
    },
    {
      "code": 6049,
      "name": "wrongValidatorAccountOrIndex",
      "msg": "Wrong validator account or index"
    },
    {
      "code": 6050,
      "name": "wrongStakeAccountOrIndex",
      "msg": "Wrong stake account or index"
    },
    {
      "code": 6051,
      "name": "unstakingOnPositiveDelta",
      "msg": "Delta stake is positive so we must stake instead of unstake"
    },
    {
      "code": 6052,
      "name": "stakingOnNegativeDelta",
      "msg": "Delta stake is negative so we must unstake instead of stake"
    },
    {
      "code": 6053,
      "name": "movingStakeIsCapped",
      "msg": "Moving stake during an epoch is capped"
    },
    {
      "code": 6054,
      "name": "stakeMustBeUninitialized",
      "msg": "Stake must be uninitialized"
    },
    {
      "code": 6055,
      "name": "destinationStakeMustBeDelegated",
      "msg": "Destination stake must be delegated"
    },
    {
      "code": 6056,
      "name": "destinationStakeMustNotBeDeactivating",
      "msg": "Destination stake must not be deactivating"
    },
    {
      "code": 6057,
      "name": "destinationStakeMustBeUpdated",
      "msg": "Destination stake must be updated"
    },
    {
      "code": 6058,
      "name": "invalidDestinationStakeDelegation",
      "msg": "Invalid destination stake delegation"
    },
    {
      "code": 6059,
      "name": "sourceStakeMustBeDelegated",
      "msg": "Source stake must be delegated"
    },
    {
      "code": 6060,
      "name": "sourceStakeMustNotBeDeactivating",
      "msg": "Source stake must not be deactivating"
    },
    {
      "code": 6061,
      "name": "sourceStakeMustBeUpdated",
      "msg": "Source stake must be updated"
    },
    {
      "code": 6062,
      "name": "invalidSourceStakeDelegation",
      "msg": "Invalid source stake delegation"
    },
    {
      "code": 6063,
      "name": "invalidDelayedUnstakeTicket",
      "msg": "Invalid delayed unstake ticket"
    },
    {
      "code": 6064,
      "name": "reusingDelayedUnstakeTicket",
      "msg": "Reusing delayed unstake ticket"
    },
    {
      "code": 6065,
      "name": "emergencyUnstakingFromNonZeroScoredValidator",
      "msg": "Emergency unstaking from non zero scored validator"
    },
    {
      "code": 6066,
      "name": "wrongValidatorDuplicationFlag",
      "msg": "Wrong validator duplication flag"
    },
    {
      "code": 6067,
      "name": "redepositingMarinadeStake",
      "msg": "Redepositing marinade stake"
    },
    {
      "code": 6068,
      "name": "removingValidatorWithBalance",
      "msg": "Removing validator with balance"
    },
    {
      "code": 6069,
      "name": "redelegateOverTarget",
      "msg": "Redelegate will put validator over stake target"
    },
    {
      "code": 6070,
      "name": "sourceAndDestValidatorsAreTheSame",
      "msg": "Source and Dest Validators are the same"
    },
    {
      "code": 6071,
      "name": "unregisteredMsolMinted",
      "msg": "Some mSOL tokens was minted outside of marinade contract"
    },
    {
      "code": 6072,
      "name": "unregisteredLpMinted",
      "msg": "Some LP tokens was minted outside of marinade contract"
    },
    {
      "code": 6073,
      "name": "listIndexOutOfBounds",
      "msg": "List index out of bounds"
    },
    {
      "code": 6074,
      "name": "listOverflow",
      "msg": "List overflow"
    },
    {
      "code": 6075,
      "name": "alreadyPaused",
      "msg": "Requested pause and already Paused"
    },
    {
      "code": 6076,
      "name": "notPaused",
      "msg": "Requested resume, but not Paused"
    },
    {
      "code": 6077,
      "name": "programIsPaused",
      "msg": "Emergency Pause is Active"
    },
    {
      "code": 6078,
      "name": "invalidPauseAuthority",
      "msg": "Invalid pause authority"
    },
    {
      "code": 6079,
      "name": "selectedStakeAccountHasNotEnoughFunds",
      "msg": "Selected Stake account has not enough funds"
    },
    {
      "code": 6080,
      "name": "basisPointCentsOverflow",
      "msg": "Basis point CENTS overflow"
    },
    {
      "code": 6081,
      "name": "withdrawStakeAccountIsNotEnabled",
      "msg": "Withdraw stake account is not enabled"
    },
    {
      "code": 6082,
      "name": "withdrawStakeAccountFeeIsTooHigh",
      "msg": "Withdraw stake account fee is too high"
    },
    {
      "code": 6083,
      "name": "delayedUnstakeFeeIsTooHigh",
      "msg": "Delayed unstake fee is too high"
    },
    {
      "code": 6084,
      "name": "withdrawStakeLamportsIsTooLow",
      "msg": "Withdraw stake account value is too low"
    },
    {
      "code": 6085,
      "name": "stakeAccountRemainderTooLow",
      "msg": "Stake account remainder too low"
    },
    {
      "code": 6086,
      "name": "shrinkingListWithDeletingContents",
      "msg": "Capacity of the list must be not less than it's current size"
    }
  ],
  "types": [
    {
      "name": "splitStakeAccountInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "index",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "u64ValueChange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": "u64"
          },
          {
            "name": "new",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "u32ValueChange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": "u32"
          },
          {
            "name": "new",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "feeValueChange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "new",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          }
        ]
      }
    },
    {
      "name": "feeCentsValueChange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": {
              "defined": {
                "name": "feeCents"
              }
            }
          },
          {
            "name": "new",
            "type": {
              "defined": {
                "name": "feeCents"
              }
            }
          }
        ]
      }
    },
    {
      "name": "pubkeyValueChange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": "pubkey"
          },
          {
            "name": "new",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "boolValueChange",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "old",
            "type": "bool"
          },
          {
            "name": "new",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "changeAuthorityData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "validatorManager",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "operationalSolAccount",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "treasuryMsolAccount",
            "type": {
              "option": "pubkey"
            }
          },
          {
            "name": "pauseAuthority",
            "type": {
              "option": "pubkey"
            }
          }
        ]
      }
    },
    {
      "name": "configLpParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minFee",
            "type": {
              "option": {
                "defined": {
                  "name": "fee"
                }
              }
            }
          },
          {
            "name": "maxFee",
            "type": {
              "option": {
                "defined": {
                  "name": "fee"
                }
              }
            }
          },
          {
            "name": "liquidityTarget",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "treasuryCut",
            "type": {
              "option": {
                "defined": {
                  "name": "fee"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "configMarinadeParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rewardsFee",
            "type": {
              "option": {
                "defined": {
                  "name": "fee"
                }
              }
            }
          },
          {
            "name": "slotsForStakeDelta",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "minStake",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "minDeposit",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "minWithdraw",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "stakingSolCap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "liquiditySolCap",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "withdrawStakeAccountEnabled",
            "type": {
              "option": "bool"
            }
          },
          {
            "name": "delayedUnstakeFee",
            "type": {
              "option": {
                "defined": {
                  "name": "feeCents"
                }
              }
            }
          },
          {
            "name": "withdrawStakeAccountFee",
            "type": {
              "option": {
                "defined": {
                  "name": "feeCents"
                }
              }
            }
          },
          {
            "name": "maxStakeMovedPerEpoch",
            "type": {
              "option": {
                "defined": {
                  "name": "fee"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "initializeData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminAuthority",
            "type": "pubkey"
          },
          {
            "name": "validatorManagerAuthority",
            "type": "pubkey"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "rewardsFee",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "liqPool",
            "type": {
              "defined": {
                "name": "liqPoolInitializeData"
              }
            }
          },
          {
            "name": "additionalStakeRecordSpace",
            "type": "u32"
          },
          {
            "name": "additionalValidatorRecordSpace",
            "type": "u32"
          },
          {
            "name": "slotsForStakeDelta",
            "type": "u64"
          },
          {
            "name": "pauseAuthority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "liqPoolInitializeData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpLiquidityTarget",
            "type": "u64"
          },
          {
            "name": "lpMaxFee",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "lpMinFee",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "lpTreasuryCut",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          }
        ]
      }
    },
    {
      "name": "fee",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "basisPoints",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "feeCents",
      "docs": [
        "FeeCents, same as Fee but / 1_000_000 instead of 10_000",
        "1 FeeCent = 0.0001%, 10_000 FeeCent = 1%, 1_000_000 FeeCent = 100%"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bpCents",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "liqPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lpMint",
            "type": "pubkey"
          },
          {
            "name": "lpMintAuthorityBumpSeed",
            "type": "u8"
          },
          {
            "name": "solLegBumpSeed",
            "type": "u8"
          },
          {
            "name": "msolLegAuthorityBumpSeed",
            "type": "u8"
          },
          {
            "name": "msolLeg",
            "type": "pubkey"
          },
          {
            "name": "lpLiquidityTarget",
            "docs": [
              "Liquidity target. If the Liquidity reach this amount, the fee reaches lp_min_discount_fee"
            ],
            "type": "u64"
          },
          {
            "name": "lpMaxFee",
            "docs": [
              "Liquidity pool max fee"
            ],
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "lpMinFee",
            "docs": [
              "SOL/mSOL Liquidity pool min fee"
            ],
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "treasuryCut",
            "docs": [
              "Treasury cut"
            ],
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "lpSupply",
            "type": "u64"
          },
          {
            "name": "lentFromSolLeg",
            "type": "u64"
          },
          {
            "name": "liquiditySolCap",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "list",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "account",
            "type": "pubkey"
          },
          {
            "name": "itemSize",
            "type": "u32"
          },
          {
            "name": "count",
            "type": "u32"
          },
          {
            "name": "reserved1",
            "type": "pubkey"
          },
          {
            "name": "reserved2",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "stakeRecord",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeAccount",
            "type": "pubkey"
          },
          {
            "name": "lastUpdateDelegatedLamports",
            "type": "u64"
          },
          {
            "name": "lastUpdateEpoch",
            "type": "u64"
          },
          {
            "name": "isEmergencyUnstaking",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "stakeList",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "stakeSystem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakeList",
            "type": {
              "defined": {
                "name": "list"
              }
            }
          },
          {
            "name": "delayedUnstakeCoolingDown",
            "type": "u64"
          },
          {
            "name": "stakeDepositBumpSeed",
            "type": "u8"
          },
          {
            "name": "stakeWithdrawBumpSeed",
            "type": "u8"
          },
          {
            "name": "slotsForStakeDelta",
            "docs": [
              "set by admin, how much slots before the end of the epoch, stake-delta can start"
            ],
            "type": "u64"
          },
          {
            "name": "lastStakeDeltaEpoch",
            "docs": [
              "Marks the start of stake-delta operations, meaning that if somebody starts a delayed-unstake ticket",
              "after this var is set with epoch_num the ticket will have epoch_created = current_epoch+1",
              "(the user must wait one more epoch, because their unstake-delta will be execute in this epoch)"
            ],
            "type": "u64"
          },
          {
            "name": "minStake",
            "type": "u64"
          },
          {
            "name": "extraStakeDeltaRuns",
            "docs": [
              "can be set by validator-manager-auth to allow a second run of stake-delta to stake late stakers in the last minute of the epoch",
              "so we maximize user's rewards"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "validatorRecord",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "validatorAccount",
            "docs": [
              "Validator vote pubkey"
            ],
            "type": "pubkey"
          },
          {
            "name": "activeBalance",
            "docs": [
              "Validator total balance in lamports"
            ],
            "type": "u64"
          },
          {
            "name": "score",
            "type": "u32"
          },
          {
            "name": "lastStakeDeltaEpoch",
            "type": "u64"
          },
          {
            "name": "duplicationFlagBumpSeed",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "validatorList",
      "type": {
        "kind": "struct"
      }
    },
    {
      "name": "validatorSystem",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "validatorList",
            "type": {
              "defined": {
                "name": "list"
              }
            }
          },
          {
            "name": "managerAuthority",
            "type": "pubkey"
          },
          {
            "name": "totalValidatorScore",
            "type": "u32"
          },
          {
            "name": "totalActiveBalance",
            "docs": [
              "sum of all active lamports staked"
            ],
            "type": "u64"
          },
          {
            "name": "autoAddValidatorEnabled",
            "docs": [
              "DEPRECATED, no longer used"
            ],
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ticketAccountData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stateAddress",
            "type": "pubkey"
          },
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "lamportsAmount",
            "type": "u64"
          },
          {
            "name": "createdEpoch",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "state",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "msolMint",
            "type": "pubkey"
          },
          {
            "name": "adminAuthority",
            "type": "pubkey"
          },
          {
            "name": "operationalSolAccount",
            "type": "pubkey"
          },
          {
            "name": "treasuryMsolAccount",
            "type": "pubkey"
          },
          {
            "name": "reserveBumpSeed",
            "type": "u8"
          },
          {
            "name": "msolMintAuthorityBumpSeed",
            "type": "u8"
          },
          {
            "name": "rentExemptForTokenAcc",
            "type": "u64"
          },
          {
            "name": "rewardFee",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "stakeSystem",
            "type": {
              "defined": {
                "name": "stakeSystem"
              }
            }
          },
          {
            "name": "validatorSystem",
            "type": {
              "defined": {
                "name": "validatorSystem"
              }
            }
          },
          {
            "name": "liqPool",
            "type": {
              "defined": {
                "name": "liqPool"
              }
            }
          },
          {
            "name": "availableReserveBalance",
            "type": "u64"
          },
          {
            "name": "msolSupply",
            "type": "u64"
          },
          {
            "name": "msolPrice",
            "type": "u64"
          },
          {
            "name": "circulatingTicketCount",
            "docs": [
              "count tickets for delayed-unstake"
            ],
            "type": "u64"
          },
          {
            "name": "circulatingTicketBalance",
            "docs": [
              "total lamports amount of generated and not claimed yet tickets"
            ],
            "type": "u64"
          },
          {
            "name": "lentFromReserve",
            "type": "u64"
          },
          {
            "name": "minDeposit",
            "type": "u64"
          },
          {
            "name": "minWithdraw",
            "type": "u64"
          },
          {
            "name": "stakingSolCap",
            "type": "u64"
          },
          {
            "name": "emergencyCoolingDown",
            "type": "u64"
          },
          {
            "name": "pauseAuthority",
            "docs": [
              "emergency pause"
            ],
            "type": "pubkey"
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "delayedUnstakeFee",
            "type": {
              "defined": {
                "name": "feeCents"
              }
            }
          },
          {
            "name": "withdrawStakeAccountFee",
            "type": {
              "defined": {
                "name": "feeCents"
              }
            }
          },
          {
            "name": "withdrawStakeAccountEnabled",
            "type": "bool"
          },
          {
            "name": "lastStakeMoveEpoch",
            "type": "u64"
          },
          {
            "name": "stakeMoved",
            "type": "u64"
          },
          {
            "name": "maxStakeMovedPerEpoch",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          }
        ]
      }
    },
    {
      "name": "changeAuthorityEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "adminChange",
            "type": {
              "option": {
                "defined": {
                  "name": "pubkeyValueChange"
                }
              }
            }
          },
          {
            "name": "validatorManagerChange",
            "type": {
              "option": {
                "defined": {
                  "name": "pubkeyValueChange"
                }
              }
            }
          },
          {
            "name": "operationalSolAccountChange",
            "type": {
              "option": {
                "defined": {
                  "name": "pubkeyValueChange"
                }
              }
            }
          },
          {
            "name": "treasuryMsolAccountChange",
            "type": {
              "option": {
                "defined": {
                  "name": "pubkeyValueChange"
                }
              }
            }
          },
          {
            "name": "pauseAuthorityChange",
            "type": {
              "option": {
                "defined": {
                  "name": "pubkeyValueChange"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "configLpEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "minFeeChange",
            "type": {
              "option": {
                "defined": {
                  "name": "feeValueChange"
                }
              }
            }
          },
          {
            "name": "maxFeeChange",
            "type": {
              "option": {
                "defined": {
                  "name": "feeValueChange"
                }
              }
            }
          },
          {
            "name": "liquidityTargetChange",
            "type": {
              "option": {
                "defined": {
                  "name": "u64ValueChange"
                }
              }
            }
          },
          {
            "name": "treasuryCutChange",
            "type": {
              "option": {
                "defined": {
                  "name": "feeValueChange"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "configMarinadeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "rewardsFeeChange",
            "type": {
              "option": {
                "defined": {
                  "name": "feeValueChange"
                }
              }
            }
          },
          {
            "name": "slotsForStakeDeltaChange",
            "type": {
              "option": {
                "defined": {
                  "name": "u64ValueChange"
                }
              }
            }
          },
          {
            "name": "minStakeChange",
            "type": {
              "option": {
                "defined": {
                  "name": "u64ValueChange"
                }
              }
            }
          },
          {
            "name": "minDepositChange",
            "type": {
              "option": {
                "defined": {
                  "name": "u64ValueChange"
                }
              }
            }
          },
          {
            "name": "minWithdrawChange",
            "type": {
              "option": {
                "defined": {
                  "name": "u64ValueChange"
                }
              }
            }
          },
          {
            "name": "stakingSolCapChange",
            "type": {
              "option": {
                "defined": {
                  "name": "u64ValueChange"
                }
              }
            }
          },
          {
            "name": "liquiditySolCapChange",
            "type": {
              "option": {
                "defined": {
                  "name": "u64ValueChange"
                }
              }
            }
          },
          {
            "name": "withdrawStakeAccountEnabledChange",
            "type": {
              "option": {
                "defined": {
                  "name": "boolValueChange"
                }
              }
            }
          },
          {
            "name": "delayedUnstakeFeeChange",
            "type": {
              "option": {
                "defined": {
                  "name": "feeCentsValueChange"
                }
              }
            }
          },
          {
            "name": "withdrawStakeAccountFeeChange",
            "type": {
              "option": {
                "defined": {
                  "name": "feeCentsValueChange"
                }
              }
            }
          },
          {
            "name": "maxStakeMovedPerEpochChange",
            "type": {
              "option": {
                "defined": {
                  "name": "feeValueChange"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "initializeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "params",
            "type": {
              "defined": {
                "name": "initializeData"
              }
            }
          },
          {
            "name": "stakeList",
            "type": "pubkey"
          },
          {
            "name": "validatorList",
            "type": "pubkey"
          },
          {
            "name": "msolMint",
            "type": "pubkey"
          },
          {
            "name": "operationalSolAccount",
            "type": "pubkey"
          },
          {
            "name": "lpMint",
            "type": "pubkey"
          },
          {
            "name": "lpMsolLeg",
            "type": "pubkey"
          },
          {
            "name": "treasuryMsolAccount",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "emergencyPauseEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "resumeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "reallocValidatorListEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "count",
            "type": "u32"
          },
          {
            "name": "newCapacity",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "reallocStakeListEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "count",
            "type": "u32"
          },
          {
            "name": "newCapacity",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "deactivateStakeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "stakeIndex",
            "type": "u32"
          },
          {
            "name": "stakeAccount",
            "type": "pubkey"
          },
          {
            "name": "lastUpdateStakeDelegation",
            "type": "u64"
          },
          {
            "name": "splitStakeAccount",
            "type": {
              "option": {
                "defined": {
                  "name": "splitStakeAccountInfo"
                }
              }
            }
          },
          {
            "name": "validatorIndex",
            "type": "u32"
          },
          {
            "name": "validatorVote",
            "type": "pubkey"
          },
          {
            "name": "totalStakeTarget",
            "type": "u64"
          },
          {
            "name": "validatorStakeTarget",
            "type": "u64"
          },
          {
            "name": "totalActiveBalance",
            "type": "u64"
          },
          {
            "name": "delayedUnstakeCoolingDown",
            "type": "u64"
          },
          {
            "name": "validatorActiveBalance",
            "type": "u64"
          },
          {
            "name": "totalUnstakeDelta",
            "type": "u64"
          },
          {
            "name": "unstakedAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "mergeStakesEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "destinationStakeIndex",
            "type": "u32"
          },
          {
            "name": "destinationStakeAccount",
            "type": "pubkey"
          },
          {
            "name": "lastUpdateDestinationStakeDelegation",
            "type": "u64"
          },
          {
            "name": "sourceStakeIndex",
            "type": "u32"
          },
          {
            "name": "sourceStakeAccount",
            "type": "pubkey"
          },
          {
            "name": "lastUpdateSourceStakeDelegation",
            "type": "u64"
          },
          {
            "name": "validatorIndex",
            "type": "u32"
          },
          {
            "name": "validatorVote",
            "type": "pubkey"
          },
          {
            "name": "extraDelegated",
            "type": "u64"
          },
          {
            "name": "returnedStakeRent",
            "type": "u64"
          },
          {
            "name": "validatorActiveBalance",
            "type": "u64"
          },
          {
            "name": "totalActiveBalance",
            "type": "u64"
          },
          {
            "name": "operationalSolBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "redelegateEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "stakeIndex",
            "type": "u32"
          },
          {
            "name": "stakeAccount",
            "type": "pubkey"
          },
          {
            "name": "lastUpdateDelegation",
            "type": "u64"
          },
          {
            "name": "sourceValidatorIndex",
            "type": "u32"
          },
          {
            "name": "sourceValidatorVote",
            "type": "pubkey"
          },
          {
            "name": "sourceValidatorScore",
            "type": "u32"
          },
          {
            "name": "sourceValidatorBalance",
            "type": "u64"
          },
          {
            "name": "sourceValidatorStakeTarget",
            "type": "u64"
          },
          {
            "name": "destValidatorIndex",
            "type": "u32"
          },
          {
            "name": "destValidatorVote",
            "type": "pubkey"
          },
          {
            "name": "destValidatorScore",
            "type": "u32"
          },
          {
            "name": "destValidatorBalance",
            "type": "u64"
          },
          {
            "name": "destValidatorStakeTarget",
            "type": "u64"
          },
          {
            "name": "redelegateAmount",
            "type": "u64"
          },
          {
            "name": "splitStakeAccount",
            "type": {
              "option": {
                "defined": {
                  "name": "splitStakeAccountInfo"
                }
              }
            }
          },
          {
            "name": "redelegateStakeIndex",
            "type": "u32"
          },
          {
            "name": "redelegateStakeAccount",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "stakeReserveEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "stakeIndex",
            "type": "u32"
          },
          {
            "name": "stakeAccount",
            "type": "pubkey"
          },
          {
            "name": "validatorIndex",
            "type": "u32"
          },
          {
            "name": "validatorVote",
            "type": "pubkey"
          },
          {
            "name": "totalStakeTarget",
            "type": "u64"
          },
          {
            "name": "validatorStakeTarget",
            "type": "u64"
          },
          {
            "name": "reserveBalance",
            "type": "u64"
          },
          {
            "name": "totalActiveBalance",
            "type": "u64"
          },
          {
            "name": "validatorActiveBalance",
            "type": "u64"
          },
          {
            "name": "totalStakeDelta",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateActiveEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "stakeIndex",
            "type": "u32"
          },
          {
            "name": "stakeAccount",
            "type": "pubkey"
          },
          {
            "name": "validatorIndex",
            "type": "u32"
          },
          {
            "name": "validatorVote",
            "type": "pubkey"
          },
          {
            "name": "delegationChange",
            "type": {
              "defined": {
                "name": "u64ValueChange"
              }
            }
          },
          {
            "name": "delegationGrowthMsolFees",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "extraLamports",
            "type": "u64"
          },
          {
            "name": "extraMsolFees",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "validatorActiveBalance",
            "type": "u64"
          },
          {
            "name": "totalActiveBalance",
            "type": "u64"
          },
          {
            "name": "msolPriceChange",
            "type": {
              "defined": {
                "name": "u64ValueChange"
              }
            }
          },
          {
            "name": "rewardFeeUsed",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "totalVirtualStakedLamports",
            "type": "u64"
          },
          {
            "name": "msolSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "updateDeactivatedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "stakeIndex",
            "type": "u32"
          },
          {
            "name": "stakeAccount",
            "type": "pubkey"
          },
          {
            "name": "balanceWithoutRentExempt",
            "type": "u64"
          },
          {
            "name": "lastUpdateDelegatedLamports",
            "type": "u64"
          },
          {
            "name": "msolFees",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "msolPriceChange",
            "type": {
              "defined": {
                "name": "u64ValueChange"
              }
            }
          },
          {
            "name": "rewardFeeUsed",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "operationalSolBalance",
            "type": "u64"
          },
          {
            "name": "totalVirtualStakedLamports",
            "type": "u64"
          },
          {
            "name": "msolSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "claimEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "ticket",
            "type": "pubkey"
          },
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "circulatingTicketBalance",
            "type": "u64"
          },
          {
            "name": "circulatingTicketCount",
            "type": "u64"
          },
          {
            "name": "reserveBalance",
            "type": "u64"
          },
          {
            "name": "userBalance",
            "type": "u64"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "orderUnstakeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "ticketEpoch",
            "type": "u64"
          },
          {
            "name": "ticket",
            "type": "pubkey"
          },
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "circulatingTicketBalance",
            "type": "u64"
          },
          {
            "name": "circulatingTicketCount",
            "type": "u64"
          },
          {
            "name": "userMsolBalance",
            "type": "u64"
          },
          {
            "name": "burnedMsolAmount",
            "type": "u64"
          },
          {
            "name": "solAmount",
            "type": "u64"
          },
          {
            "name": "feeBpCents",
            "type": "u32"
          },
          {
            "name": "totalVirtualStakedLamports",
            "type": "u64"
          },
          {
            "name": "msolSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addLiquidityEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "solOwner",
            "type": "pubkey"
          },
          {
            "name": "userSolBalance",
            "type": "u64"
          },
          {
            "name": "userLpBalance",
            "type": "u64"
          },
          {
            "name": "solLegBalance",
            "type": "u64"
          },
          {
            "name": "lpSupply",
            "type": "u64"
          },
          {
            "name": "solAddedAmount",
            "type": "u64"
          },
          {
            "name": "lpMinted",
            "type": "u64"
          },
          {
            "name": "totalVirtualStakedLamports",
            "type": "u64"
          },
          {
            "name": "msolSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "liquidUnstakeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "msolOwner",
            "type": "pubkey"
          },
          {
            "name": "liqPoolSolBalance",
            "type": "u64"
          },
          {
            "name": "liqPoolMsolBalance",
            "type": "u64"
          },
          {
            "name": "treasuryMsolBalance",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "userMsolBalance",
            "type": "u64"
          },
          {
            "name": "userSolBalance",
            "type": "u64"
          },
          {
            "name": "msolAmount",
            "type": "u64"
          },
          {
            "name": "msolFee",
            "type": "u64"
          },
          {
            "name": "treasuryMsolCut",
            "type": "u64"
          },
          {
            "name": "solAmount",
            "type": "u64"
          },
          {
            "name": "lpLiquidityTarget",
            "type": "u64"
          },
          {
            "name": "lpMaxFee",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "lpMinFee",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          },
          {
            "name": "treasuryCut",
            "type": {
              "defined": {
                "name": "fee"
              }
            }
          }
        ]
      }
    },
    {
      "name": "removeLiquidityEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "solLegBalance",
            "type": "u64"
          },
          {
            "name": "msolLegBalance",
            "type": "u64"
          },
          {
            "name": "userLpBalance",
            "type": "u64"
          },
          {
            "name": "userSolBalance",
            "type": "u64"
          },
          {
            "name": "userMsolBalance",
            "type": "u64"
          },
          {
            "name": "lpMintSupply",
            "type": "u64"
          },
          {
            "name": "lpBurned",
            "type": "u64"
          },
          {
            "name": "solOutAmount",
            "type": "u64"
          },
          {
            "name": "msolOutAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "addValidatorEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "validator",
            "type": "pubkey"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "score",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "removeValidatorEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "validator",
            "type": "pubkey"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "operationalSolBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setValidatorScoreEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "validator",
            "type": "pubkey"
          },
          {
            "name": "index",
            "type": "u32"
          },
          {
            "name": "scoreChange",
            "type": {
              "defined": {
                "name": "u32ValueChange"
              }
            }
          }
        ]
      }
    },
    {
      "name": "depositStakeAccountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "stake",
            "type": "pubkey"
          },
          {
            "name": "delegated",
            "type": "u64"
          },
          {
            "name": "withdrawer",
            "type": "pubkey"
          },
          {
            "name": "stakeIndex",
            "type": "u32"
          },
          {
            "name": "validator",
            "type": "pubkey"
          },
          {
            "name": "validatorIndex",
            "type": "u32"
          },
          {
            "name": "validatorActiveBalance",
            "type": "u64"
          },
          {
            "name": "totalActiveBalance",
            "type": "u64"
          },
          {
            "name": "userMsolBalance",
            "type": "u64"
          },
          {
            "name": "msolMinted",
            "type": "u64"
          },
          {
            "name": "totalVirtualStakedLamports",
            "type": "u64"
          },
          {
            "name": "msolSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "depositEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "solOwner",
            "type": "pubkey"
          },
          {
            "name": "userSolBalance",
            "type": "u64"
          },
          {
            "name": "userMsolBalance",
            "type": "u64"
          },
          {
            "name": "solLegBalance",
            "type": "u64"
          },
          {
            "name": "msolLegBalance",
            "type": "u64"
          },
          {
            "name": "reserveBalance",
            "type": "u64"
          },
          {
            "name": "solSwapped",
            "type": "u64"
          },
          {
            "name": "msolSwapped",
            "type": "u64"
          },
          {
            "name": "solDeposited",
            "type": "u64"
          },
          {
            "name": "msolMinted",
            "type": "u64"
          },
          {
            "name": "totalVirtualStakedLamports",
            "type": "u64"
          },
          {
            "name": "msolSupply",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "withdrawStakeAccountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "state",
            "type": "pubkey"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "stake",
            "type": "pubkey"
          },
          {
            "name": "lastUpdateStakeDelegation",
            "type": "u64"
          },
          {
            "name": "stakeIndex",
            "type": "u32"
          },
          {
            "name": "validator",
            "type": "pubkey"
          },
          {
            "name": "validatorIndex",
            "type": "u32"
          },
          {
            "name": "userMsolBalance",
            "type": "u64"
          },
          {
            "name": "userMsolAuth",
            "type": "pubkey"
          },
          {
            "name": "msolBurned",
            "type": "u64"
          },
          {
            "name": "msolFees",
            "type": "u64"
          },
          {
            "name": "splitStake",
            "type": "pubkey"
          },
          {
            "name": "beneficiary",
            "type": "pubkey"
          },
          {
            "name": "splitLamports",
            "type": "u64"
          },
          {
            "name": "feeBpCents",
            "type": "u32"
          },
          {
            "name": "totalVirtualStakedLamports",
            "type": "u64"
          },
          {
            "name": "msolSupply",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

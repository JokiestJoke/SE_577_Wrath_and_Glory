/*
Copyright © 2023 NAME HERE <EMAIL ADDRESS>
*/
package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// getghreposCmd represents the getghrepos command
var getghreposCmd = &cobra.Command{
	Use:   "getghrepos",
	Short: "This command gets a list of repos from github!",
	Long: `I can get real long winded but its just calling a
stock github supplied api.   And so on and so on. `,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("getghrepos called")
	},
}

func init() {
	rootCmd.AddCommand(getghreposCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// getghreposCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// getghreposCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
